import ActionTypes, {
  _ERROR_SUFIX,
  _SUCCESS_SUFIX,
} from '../constants/ActionTypes';
import * as RequestStatuses from '../constants/RequestStatuses';

export const initialState = {
  issue: {},
  isValid: false,
  requestStatus: RequestStatuses.SUCCESS,
  requestError: null,
  isOpen: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ISSUE_FORM_ELEMENT:
      return {
        ...state,
        issue: {
          ...state.issue,
          ...payload,
        },
      };

    case ActionTypes.SUMBIT_ISSUE_FORM:
      return {
        ...state,
        requestStatus: RequestStatuses.PENDING,
        requestError: null,
      };

    case `${ActionTypes.SUMBIT_ISSUE_FORM}${_SUCCESS_SUFIX}`:
      return {
        ...state,
        requestStatus: RequestStatuses.SUCCESS,
        issue: {},
        requestError: null,
      };

    case `${ActionTypes.SUMBIT_ISSUE_FORM}${_ERROR_SUFIX}`:
      return {
        ...state,
        requestStatus: RequestStatuses.ERROR,
        requestError: payload,
      };

    case ActionTypes.TOGGLE_ISSUE_FORM:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};
