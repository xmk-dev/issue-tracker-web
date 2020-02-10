import { _SUCCESS_SUFIX, _ERROR_SUFIX } from '../constants/ActionTypes';

export default (actionType, func, param = null) => async (dispatch) => {
  try {
    dispatch({ type: actionType, payload: param });
    const data = await (param ? func(param) : func());
    dispatch({
      type: `${actionType}${_SUCCESS_SUFIX}`,
      payload: data,
    });
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    dispatch({
      type: `${actionType}${_ERROR_SUFIX}`,
      payload: error,
    });
    return null;
  }
};
