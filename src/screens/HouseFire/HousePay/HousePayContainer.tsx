import React from 'react';
import HousePayPresenter from './HousePayPresenter';
import { priceDot } from '@app/lib';
import { EmptyLayout } from '@app/layout';
import { useNavigation } from '@react-navigation/native';
import { useGlobalState } from '@app/context';
import moment from 'moment';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
import { useInput } from '@app/hooks';

export default function HousePayContainer({
  state,
  onChangeState,
  handlePreviousButton,
  handleNextButton,
  onChangeTermsState,
  onClickTermsModalAgree,
  onClickTermsModalOpen,
  onClickAllCheck,
  resultBuildPrice,
  resultGajePrice,
}) {
  const navigation = useNavigation();
  const globalState = useGlobalState();
  const insuPrice = priceDot(resultBuildPrice() + resultGajePrice());
  const selectInsu = state?.selectAddress?.premiums?.filter((item) => {
    return item.aply_yn === 'Y' && item.already_group_ins === state?.selectAddress.already_group_ins;
  });
  const insuEndDateYear = Number(state?.contractInsuInfo?.insDate?.slice(0, 4)) + 1;
  const insuEndDateMonth = state?.contractInsuInfo?.insDate?.slice(5, 7);
  const insuEndDateDay = Number(state?.contractInsuInfo?.insDate?.slice(8)) - 1;
  const filnalInsuEndDateDay =
    String(insuEndDateDay)?.length === 1 ? '0' + String(insuEndDateDay) : String(insuEndDateDay);
  const insuEndDate = insuEndDateYear + '-' + insuEndDateMonth + '-' + filnalInsuEndDateDay;
  const inputState = {
    card1: useInput(''),
    card2: useInput(''),
    card3: useInput(''),
    card4: useInput(''),
    cardYear: useInput(''),
    cardMonth: useInput(''),
    birthDay: useInput(''),
    pw: useInput(''),
  };
  console.log(state?.selectAddress);
  const handleCardPay = () => {
    const card_number =
      inputState.card1.value + inputState.card2.value + inputState.card3.value + inputState.card4.value;
    const card_expire = inputState.cardYear.value + inputState.cardMonth.value;
    const reg_no = inputState.birthDay.value;
    const card_pw = inputState.pw.value;
    const data = {
      user_id: globalState?.user?.email,
      data: {
        quote_no: state?.selectAddress?.quote_no,
        prod_code: state?.selectAddress?.product?.p_code,
        prod_name: state?.selectAddress?.product?.p_name,
        opayment: resultBuildPrice() + resultGajePrice(),
        polholder: globalState?.user?.name,
        insurant_a: state?.contractInsuInfo?.name,
        insurant_b: state?.contractInsuInfo?.name,
        premium: resultBuildPrice() + resultGajePrice(),
        insdate: moment(new Date()).format('YYYYMMDD'),
        ins_from: moment(state?.contractInsuInfo?.insDate).format('YYYYMMDD'),
        ins_to: moment(insuEndDate).format('YYYYMMDD'),
        ptype: '0',
        insloc: state?.selectAddress?.address,
        mobile: globalState?.user?.mobile,
        email: globalState?.user?.email,
        poption: '4',
        pbohumja_mobile: state?.contractInsuInfo?.mobile,
        jumin: state?.contractInsuInfo?.juminb,
        owner: state?.contractInsuInfo?.owner,
        pbohumja_birth: state?.contractInsuInfo?.pbohumjaBirth,
        advisor_no: String(state?.contractInsuInfo?.advisor_no),
        card: {
          card_number,
          card_expire,
          reg_no,
          card_pw,
        },
        terms: {
          termsa_1: state.terms.TERMSA_1.isChecked,
          termsa_2: state.terms.TERMSA_2.isChecked,
          termsa_3: state.terms.TERMSA_3.isChecked,
          termsa_4: state.terms.TERMSA_4.isChecked,
          termsa_5: state.terms.TERMSA_5.isChecked,
          termsb_1: state.terms.TERMSB_1.isChecked,
          termsb_2: state.terms.TERMSB_2.isChecked,
          termsb_3: state.terms.TERMSB_3.isChecked,
          termsc_1: state.terms.TERMSC_1.isChecked,
          termsc_2: state.terms.TERMSC_2.isChecked,
          termsc_3: state.terms.TERMSC_3.isChecked,
          termsc_4: state.terms.TERMSC_4.isChecked,
          termsc_5: state.terms.TERMSC_5.isChecked,
          termsd_1: state.terms.TERMSC_1.isChecked,
          termsd_2: state.terms.TERMSC_2.isChecked,
          termsd_3: state.terms.TERMSC_3.isChecked,
          termse_1: state.terms.TERMSE_1.isChecked,
          termse_2: state.terms.TERMSE_2.isChecked,
          termse_3: state.terms.TERMSE_3.isChecked,
          termsf_1: state.terms.TERMSF_1.isChecked,
          termsg_1: state.terms.TERMSG_1.isChecked,
        },
        already_group_ins: state?.selectAddress?.already_group_ins,
        premiums: selectInsu,
      },
    };
    console.log(data);
    // console.log(data);
    // axios({
    //   url: 'http://192.168.0.14:8080/house/orders',
    //   method: 'POST',
    //   data,
    //   headers: {
    //     'X-insr-servicekey': 'Q29weXJpZ2h0IOKTkiBpbnN1cm9iby5jby5rciBBbGwgcmlnaHRzIHJlc2VydmVkLg==',
    //     Authorization: globalState?.user?.token,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((e) => {
    //     console.log(e.response, 12321);
    //   });
  };

  const selectCard = (name) => {
    onChangeState('selectCard', name);
  };

  const submitNextButton = () => {
    handleCardPay();
    // naviagation.navigate('PAY');
    // handleNextButton();
    // const isChecked =
    //   state.terms.TERMSA_1.isChecked === 1 &&
    //   state.terms.TERMSA_2.isChecked === 1 &&
    //   state.terms.TERMSA_3.isChecked === 1 &&
    //   state.terms.TERMSA_4.isChecked === 1;
    // if (!isChecked) {
    //   Toast.show('필수동의사항에 동의해주세요.');
    // } else {
    // }
  };

  if (state.stepNumber === 11) {
    return (
      <HousePayPresenter
        state={state}
        submitNextButton={submitNextButton}
        handlePreviousButton={handlePreviousButton}
        onChangeTermsState={onChangeTermsState}
        onChangeState={onChangeState}
        onClickTermsModalAgree={onClickTermsModalAgree}
        onClickTermsModalOpen={onClickTermsModalOpen}
        onClickAllCheck={onClickAllCheck}
        insuPrice={insuPrice}
        selectInsu={selectInsu}
        selectCard={selectCard}
        inputState={inputState}
      />
    );
  } else {
    return <EmptyLayout />;
  }
}
