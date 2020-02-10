import ActionTypes, {
  _SUCCESS_SUFIX,
  _ERROR_SUFIX,
} from '../constants/ActionTypes';
import * as RequestStatuses from '../constants/RequestStatuses';

export const initialState = {
  issues: [],
  requestStatus: RequestStatuses.SUCCESS,
  requestError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_ISSUES:
      return {
        ...state,
        requestStatus: RequestStatuses.PENDING,
        requestError: null,
      };

    case `${ActionTypes.GET_ISSUES}${_SUCCESS_SUFIX}`:
      return {
        ...state,
        issues: payload,
        requestStatus: RequestStatuses.SUCCESS,
        requestError: null,
      };

    case `${ActionTypes.GET_ISSUES}${_ERROR_SUFIX}`:
      return {
        ...state,
        requestStatus: RequestStatuses.ERROR,
        requestError: payload,
      };

    case ActionTypes.UPDATE_ISSUE:
      return {
        ...state,
        issues: state.issues.filter(
          (i) => (i._id !== payload._id),
        ).concat([payload]),
        requestStatus: RequestStatuses.PENDING,
        requestError: null,
      };

    case `${ActionTypes.UPDATE_ISSUE}${_SUCCESS_SUFIX}`:
      return {
        ...state,
        requestStatus: RequestStatuses.SUCCESS,
        requestError: null,
      };

    case `${ActionTypes.UPDATE_ISSUE}${_ERROR_SUFIX}`:
      return {
        ...state,
        requestStatus: RequestStatuses.ERROR,
        requestError: payload,
      };

    case ActionTypes.DELETE_ISSUE:
      return {
        ...state,
        issues: state.issues.filter(
          (i) => (i._id !== payload._id),
        ),
        requestStatus: RequestStatuses.PENDING,
        requestError: null,
      };

    case `${ActionTypes.DELETE_ISSUE}${_SUCCESS_SUFIX}`:
      return {
        ...state,
        requestStatus: RequestStatuses.SUCCESS,
        requestError: null,
      };

    case `${ActionTypes.DELETE_ISSUE}${_ERROR_SUFIX}`:
      return {
        ...state,
        requestStatus: RequestStatuses.ERROR,
        requestError: payload,
      };


    default:
      return state;
  }
};
