import React, { useEffect, useReducer } from 'react';
import LoginPresenter from '@app/screens/Login/LoginPresenter';
import { useInput } from '@app/hooks';
import Toast from 'react-native-simple-toast';
import { userApis } from '@app/api/User';
import { handleApiError, setStoreData } from '@app/lib';
import { useNavigation } from '@react-navigation/native';
import { useGlobalDispatch, useGlobalState } from '@app/context';

export type LoginStateNames = 'isAutoLogin' | 'loading';
export type LoginStateTypes = {
  isAutoLogin: boolean;
  loading: boolean;
};
type LoginStateActionTypes = { type: 'CHANGE'; name: LoginStateNames; value: any };

function reducer(state: LoginStateTypes, action: LoginStateActionTypes) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
  }
}

const initialState: LoginStateTypes = {
  isAutoLogin: true,
  loading: false,
};

export default function LoginContainer({ route }) {
  const navigation = useNavigation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const emailCheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const globalDispatch = useGlobalDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const globalState = useGlobalState();
  const inputState = {
    email: useInput(''),
    password: useInput(''),
  };
  const onChangeState = (name: LoginStateNames, value: any) => {
    dispatch({ type: 'CHANGE', name, value });
  };

  const handleAutoLoginButton = () => {
    onChangeState('isAutoLogin', !state.isAutoLogin);
  };

  const checkEmailAndPassword = () => {
    if (inputState.email.value === '') {
      Toast.show('이메일을 입력해주세요.');
      return false;
    } else if (!emailCheck.test(inputState.email.value)) {
      Toast.show('올바른 이메일 주소를 입력해주세요.');
      return false;
    } else if (inputState.password.value === '') {
      Toast.show('비밀번호를 입력해주세요.');
      return false;
    } else {
      return true;
    }
  };

  const submitKakaoLogin = () => {
    navigation.navigate('KakaoLogin');
  };

  const submitLogin = () => {
    const params = {
      id: inputState.email.value,
      pwd: inputState.password.value,
    };
    const isHome = route.isHome;
    if (checkEmailAndPassword()) {
      onChangeState('loading', true);
      userApis
        .postLogin(params)
        .then((res) => {
          if (res.status === 200) {
            if (state.isAutoLogin) {
              setStoreData('isAutoLogin', true);
            } else {
              setStoreData('isAutoLogin', false);
            }
            setStoreData('user', res.data);
            setStoreData('isLogin', true);
            setStoreData('password', inputState.password.value);
            globalDispatch({ type: 'CHANGE', name: 'user', value: res.data });
            globalDispatch({ type: 'CHANGE', name: 'isAutoLogin', value: state.isAutoLogin });
            globalDispatch({ type: 'CHANGE', name: 'isLogin', value: true });
            globalDispatch({ type: 'CHANGE', name: 'password', value: inputState.password.value });
            Toast.show(`환영합니다. ${res.data.name}님`);
            if (isHome) {
              navigation.navigate('MAIN_STACK');
            } else {
              navigation.goBack();
            }
            onChangeState('loading', false);
          }
          onChangeState('loading', false);
        })
        .catch((e) => {
          if (e.response.status === 401) {
            Toast.show('입력하신 아이디 또는 비밀번호가 일치하지 않습니다.');
          } else {
            handleApiError(e.response);
          }
          onChangeState('loading', false);
        });
    }
  };

  return (
    <LoginPresenter
      inputState={inputState}
      state={state}
      handleAutoLoginButton={handleAutoLoginButton}
      submitLogin={submitLogin}
      submitKakaoLogin={submitKakaoLogin}
    />
  );
}
