import AsyncStorage from '@react-native-community/async-storage';
import { commonApiConfig } from '@app/api/config';
import { getStoreData } from '@app/lib';
import { insuImg } from '@app/assets';
export const insuApis = {
  // const TOKEN = await AsyncStorage.getItem('access_token');
  async getAddress(params) {
    const res = await commonApiConfig({
      method: 'GET',
      url: '/house/juso',
      params,
    });
    return res;
  },

  async getDancheInfo(params) {
    const res = await commonApiConfig({
      method: 'POST',
      url: 'house/quotes/danche',
      params,
    });
    return res;
  },

  async getSedeCover(params) {
    const res = await commonApiConfig({
      method: 'GET',
      url: 'house/cover',
      params,
    });
    return res;
  },
  async getSedeDetail(params) {
    const res = await commonApiConfig({
      method: 'GET',
      url: 'house/detail',
      params,
    });
    return res;
  },

  async getSedeInfo(data) {
    const res = await commonApiConfig({
      method: 'POST',
      url: 'house/quotes/sedae',
      data,
    });
    return res;
  },

  async getWwAddress(params) {
    const res = await commonApiConfig({
      method: 'GET',
      url: 'ww/juso',
      params,
    });
    return res;
  },

  async getWwCover(params) {
    const res = await commonApiConfig({
      method: 'GET',
      url: 'ww/cover',
      params,
    });
    return res;
  },

  async postWwPrePremium(data) {
    const res = await commonApiConfig({
      method: 'POST',
      url: 'ww/pre-premium',
      data,
    });
    return res;
  },

  async postWwPremium(data) {
    const user: any = await getStoreData('user');
    const res = await commonApiConfig({
      method: 'POST',
      url: 'ww/premium',
      data,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return res;
  },

  async postDenial(data) {
    const user: any = await getStoreData('user');
    const res = await commonApiConfig({
      method: 'POST',
      url: 'ww/prevent_denial',
      data,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return res;
  },

  async postPay(data) {
    const user: any = await getStoreData('user');
    const res = await commonApiConfig({
      method: 'POST',
      url: 'house/orders/card',
      data,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return res;
  },

  async getVbankParams() {
    const user: any = await getStoreData('user');
    const res = await commonApiConfig({
      method: 'GET',
      url: 'kginicis/vacct/param',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return res;
  },

  async postVbank(data) {
    const user: any = await getStoreData('user');
    const res = await commonApiConfig({
      method: 'POST',
      url: 'house/orders/vacct',
      data,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return res;
  },
  async postWwPay(data) {
    const user: any = await getStoreData('user');
    const res = await commonApiConfig({
      method: 'POST',
      url: 'ww/order',
      data,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return res;
  },

  async getHsartInfo(params) {
    const res = await commonApiConfig({
      method: 'POST',
      url: 'hsart/can',
      params,
    });
    return res;
  },
  async postUploadImage(data, number) {
    const res = await commonApiConfig({
      method: 'POST',
      url: 'upload/business',
      data: {
        file: data,
        bKey: number,
      },
    });
    return res;
  },
  async getUploadNumber() {
    const res = await commonApiConfig({
      method: 'GET',
      url: 'upload/number',
    });
    return res;
  },
};
