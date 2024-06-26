import React from 'react';
import { EmptyLayout } from '@app/layout';
import JoinTypePresenter from './JoinTypePresenter';
import Toast from 'react-native-simple-toast';
import { HouseFireStateName, HouseFireStateTypes } from '@app/screens/HouseFire/HouseFireContainer';

type JoinTypeCotainerTypes = {
  state: HouseFireStateTypes;
  onChangeState: (name: HouseFireStateName, value: any) => void;
  handleNextButton: () => void;
  handlePreviousButton: () => void;
};

export default function JoinTypeCotainer({
  state,
  onChangeState,
  handleNextButton,
  handlePreviousButton,
}: JoinTypeCotainerTypes) {
  //가입유형 단체or세대가입 버튼 클릭시 타입 셋팅
  const selectJoinType = (value: 'T' | 'S' | 'T2') => {
    onChangeState('selectType', value);
  };

  //다음버튼
  const onClickNextButton = () => {
    if (state.selectType === 0) {
      Toast.show('가입유형을 선택해 주세요.');
    } else {
      handleNextButton();
    }
  };

  if (state.stepNumber === 2) {
    return (
      <JoinTypePresenter
        state={state}
        selectJoinType={selectJoinType}
        onClickNextButton={onClickNextButton}
        handlePreviousButton={handlePreviousButton}
      />
    );
  } else {
    return <EmptyLayout />;
  }
}
