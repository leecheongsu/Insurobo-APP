/* eslint-disable eslint-comments/no-unlimited-disable */
import { ActionType, ReducerType } from '@app/hooks/useAsync/useAsyncTypes';
import { useReducer, useEffect } from 'react';

function reducer(state, action: ActionType): ReducerType {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error('Unhandled action type: ${action.type}');
  }
}

export default function useAsync(callback, deps: any = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });
  const fetchData: any = async () => {
    dispatch({ type: 'LOADING' });

    try {
      const data = await callback();
      if (data?.data?.result === 'fail') {
        dispatch({ type: 'ERROR', error: data?.data?.error?.message });
        // console.log(data, 'fail');
      } else {
        dispatch({ type: 'SUCCESS', data });
        // console.log(data, 'SUCCESS');
      }
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
      console.log(e, 'error');
    }
  };

  useEffect(() => {
    if (skip) {
      return;
    }
    fetchData();
    // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}
