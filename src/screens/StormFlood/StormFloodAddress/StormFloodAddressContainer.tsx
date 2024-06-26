import React, { useEffect } from 'react';
import { insuApis } from '@app/api/Insurance';
import { useGlobalDispatch } from '@app/context';
import { useAsync, useInput } from '@app/hooks';
import { EmptyLayout } from '@app/layout';
import { handleApiError } from '@app/lib';
import { StormFloodName, StormFloodStateTypes } from '@app/screens/StormFlood/StormFloodContainer';
import { Keyboard } from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import StormFloodAddressPresenter from './StormFloodAddressPresenter';

type StormFloodAddressContainerTypes = {
  state: StormFloodStateTypes;
  onChangeState: (name: StormFloodName, value: any) => void;
  handleJoinTypeNextButton: () => void;
};

export default function StormFloodAddressContainer({
  state,
  onChangeState,
  handleJoinTypeNextButton,
}: StormFloodAddressContainerTypes) {
  const globalDispatch = useGlobalDispatch();
  const inputState = {
    searchInput: useInput(''),
  };

  const [getAddress, getAddressDispatch] = useAsync(
    () => insuApis.getWwAddress({ search: inputState.searchInput.value }),
    [],
    true
  );

  //사용자 셀렉트 박스 셋팅
  const setSelectItems = (data) => {
    const basicSectorItems: any = [];
    const factorySectorItems: any = [];
    const basicBuildingPriceItems: any = [];
    const factoryBuildingPriceItems: any = [];
    const basicFacilityPriceItems: any = [];
    const factoryFacilityPriceItems: any = [];
    const inventoryPriceItems: any = [];
    const selfPriceItems: any = [];

    data?.lobz_cds?.map((item) => {
      if (item.obj_type === '2') {
        const newBasicItems = {
          label: item.name,
          value: item,
        };
        basicSectorItems.push(newBasicItems);
      } else {
        const newFactoryItems = {
          label: item.name,
          value: item,
        };
        factorySectorItems.push(newFactoryItems);
      }
    });
    data?.premiums?.map((item) => {
      if (item.code === 'BLD' && item.sub_name === '일반') {
        item.default_yn === 'Y' && onChangeState('selectBuildingPrice', item);
        const newItems = {
          label: item.val_name + '원',
          value: item,
        };
        basicBuildingPriceItems.push(newItems);
      } else if (item.code === 'BLD' && item.sub_name === '공장') {
        const newItems = {
          label: item.val_name + '원',
          value: item,
        };
        factoryBuildingPriceItems.push(newItems);
      } else if (item.code === 'FCL' && item.sub_name === '일반') {
        item.default_yn === 'Y' && onChangeState('selectFacilityprice', item);
        const newItems = {
          label: item.val_name + '원',
          value: item,
        };
        basicFacilityPriceItems.push(newItems);
      } else if (item.code === 'FCL' && item.sub_name === '공장') {
        const newItems = {
          label: item.val_name + '원',
          value: item,
        };
        factoryFacilityPriceItems.push(newItems);
      } else if (item.code === 'INV') {
        item.default_yn === 'Y' && onChangeState('selectInventoryPrice', item);
        const newItems = {
          label: item.val_name !== '미가입' ? item.val_name + '원' : item.val_name,
          value: item,
        };
        inventoryPriceItems.push(newItems);
      } else if (item.code === 'SPY') {
        item.default_yn === 'Y' && onChangeState('selectSelfPrice', item);
        const newItems = {
          label: item.val_name + '원',
          value: item,
        };
        selfPriceItems.push(newItems);
      }
    });
    onChangeState('basicSectorItems', basicSectorItems);
    onChangeState('factorySectorItems', factorySectorItems);
    onChangeState('basicBuildingPriceItems', basicBuildingPriceItems);
    onChangeState('factoryBuildingPriceItems', factoryBuildingPriceItems);
    onChangeState('basicFacilityPriceItems', basicFacilityPriceItems);
    onChangeState('factoryFacilityPriceItems', factoryFacilityPriceItems);
    onChangeState('inventoryPriceItems', inventoryPriceItems);
    onChangeState('selfPriceItems', selfPriceItems);
  };

  //주소 선택시 도는 로직
  const SelectAddress = (item) => {
    const params = {
      sigungucd: item.admCd?.slice(0, 5),
      bjdongcd: item.admCd?.slice(5),
      bun: Number(item?.lnbrMnnm),
      ji: Number(item?.lnbrSlno),
      zip: item?.zipNo,
    };
    onChangeState('loading', true);
    insuApis
      .getWwCover(params)
      .then((res) => {
        if (res.status === 200) {
          onChangeState('selectAddress', res.data);
          setSelectItems(res.data);
          globalDispatch({ type: 'CHANGE', name: 'selectAddress', value: res.data });
          onChangeState('loading', false);
          handleJoinTypeNextButton();
        } else {
          SimpleToast.show('오류가 발생하였습니다.');
        }
      })
      .catch((e) => {
        handleApiError(e.response);
        onChangeState('loading', false);
      });
  };

  //주소검색
  const submitSearchAddress = () => {
    Keyboard.dismiss();
    onChangeState('addressErrorMessage', '');
    getAddressDispatch();
  };

  //주소검색 api 후 도는 로직
  useEffect(() => {
    if (getAddress.data?.data?.results !== undefined) {
      const result = getAddress.data?.data?.results;
      onChangeState('addressCommon', result.common);
      onChangeState('addressData', result.juso);
      if (result.common.errorMessage !== '정상') {
        onChangeState('addressErrorMessage', result.common.errorMessage);
      } else if (result.common.totalCount === '0') {
        onChangeState('addressErrorMessage', '검색 결과가 없습니다.');
      } else {
        return;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAddress]);
  if (state.stepNumber === 3) {
    return (
      <StormFloodAddressPresenter
        state={state}
        onChangeState={onChangeState}
        submitSearchAddress={submitSearchAddress}
        inputState={inputState}
        loading={getAddress.loading || state.loading}
        SelectAddress={SelectAddress}
      />
    );
  } else {
    return <EmptyLayout />;
  }
}
