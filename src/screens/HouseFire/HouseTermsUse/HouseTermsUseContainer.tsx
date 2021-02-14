import React from 'react';
import HouseTermsUsePresenter from './HouseTermsUsePresenter';
import Toast from 'react-native-simple-toast';
import { EmptyLayout } from '@app/layout';

export default function HouseTermsUseContainer({
  state,
  onChangeState,
  handlePreviousButton,
  handleNextButton,
  onChangeTermsState,
  onClickTermsModalAgree,
  onClickTermsModalOpen,
  onClickAllCheck,
}) {
  const submitNextButton = () => {
    const isChecked =
      state.terms.TERMSA_1.isChecked === 1 &&
      state.terms.TERMSA_2.isChecked === 1 &&
      state.terms.TERMSA_3.isChecked === 1 &&
      state.terms.TERMSA_4.isChecked === 1;
    if (!isChecked) {
      Toast.show('필수동의사항에 동의해주세요.');
    } else {
      handleNextButton();
    }
  };

  if (state.stepNumber === 7) {
    return (
      <HouseTermsUsePresenter
        state={state}
        submitNextButton={submitNextButton}
        handlePreviousButton={handlePreviousButton}
        onChangeTermsState={onChangeTermsState}
        onChangeState={onChangeState}
        onClickTermsModalAgree={onClickTermsModalAgree}
        onClickTermsModalOpen={onClickTermsModalOpen}
        onClickAllCheck={onClickAllCheck}
      />
    );
  } else {
    return <EmptyLayout />;
  }
}
