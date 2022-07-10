import { type Dispatch } from 'redux';

import { type HttpMethod, HTTP_METHOD } from '../types';
import { ACTION_TYPE_SUFIX, ActionType } from '../types/actionTypes';

export const request = async <T = unknown>(
  url: string,
  method?: HttpMethod,
  bodyToSerialize?: Object,
  options?: RequestInit,
  headers?: HeadersInit,
) => {
  try {
    const body: RequestInit['body'] = [HTTP_METHOD.GET, HTTP_METHOD.HEAD].includes(method)
      ? undefined
      : JSON.stringify(bodyToSerialize);
    const result = await fetch(url, {
      ...options,
      headers,
      method,
      body,
    });

    const resultObject = await result.json();

    return resultObject as T;
  } catch (error) {
    console.error(error);
  }
};

export const requestDispatch =
  <T = unknown>(actionType: ActionType, function_: Function, parameter?: unknown) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: actionType, payload: parameter });
      const data = await (parameter ? function_(parameter) : function_());
      dispatch({
        type: `${actionType}${ACTION_TYPE_SUFIX.SUCCESS}`,
        payload: data,
      });
      return data as T;
    } catch (error) {
      console.error(error);
      dispatch({
        type: `${actionType}${ACTION_TYPE_SUFIX.ERROR}`,
        payload: error,
      });
    }
  };
