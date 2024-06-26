import React from 'react';
import HouseInfoPresenter from './HouseInfoPresenter';
import moment from 'moment';
import { EmptyLayout } from '@app/layout';
import { HouseFireStateTypes } from '@app/screens/HouseFire/HouseFireContainer';

export type HouseInfoContainerTypes = {
  state: HouseFireStateTypes;
  handleNextButton: () => void;
  handlePreviousButton: () => void;
};

export type InfoListTypes = {
  address: string;
  bld_name: string;
  main_purps: string;
  flr_name: string;
  cnt_sedae: string;
  dong_info: any;
  total_area: string;
  main_struct: string;
  main_struct2: string;
  use_apr_date: string;
  roof_name: string;
};

export default function HouseInfoContainer({ state, handleNextButton, handlePreviousButton }: HouseInfoContainerTypes) {
  const infoList: InfoListTypes = {
    address: state.selectAddress?.address,
    bld_name: state.selectAddress?.bld_name,
    main_purps: state.selectAddress?.main_purps,
    flr_name: state.selectAddress?.flr_name,
    cnt_sedae: state.selectAddress?.cnt_sedae,
    dong_info:
        (state.selectType === 'T' || state.selectType === 'T2') && state?.selectAddress?.dong_info
        ? Object.entries(JSON.parse(state?.selectAddress?.dong_info)[0])
        : state?.selectAddress?.dong_info,
    total_area: state.selectAddress?.total_area,
    main_struct: state.selectAddress?.main_struct,
    main_struct2: state.selectAddress?.main_struct,
    use_apr_date: moment(state.selectAddress?.use_apr_date).format('YYYY.MM.DD'),
    roof_name: state.selectAddress?.roof_name,
  };
  if (state.stepNumber === 4) {
    return (
      <HouseInfoPresenter
        state={state}
        handleNextButton={handleNextButton}
        handlePreviousButton={handlePreviousButton}
        infoList={infoList}
      />
    );
  } else {
    return <EmptyLayout />;
  }
}
