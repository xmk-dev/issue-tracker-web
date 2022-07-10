import { ACTION_TYPE, ACTION_TYPE_SUFIX, EMPTY_ISSUE, REQUEST_STATUS } from '../../types';
import type { IssueFormReducer, IssueFormState } from './types';

export const initialState: IssueFormState = {
  issue: EMPTY_ISSUE,
  isOpen: false,
  isValid: false,
  requestStatus: REQUEST_STATUS.SUCCESS,
  requestError: undefined,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const reducer: IssueFormReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SET_ISSUE_FORM_ELEMENT:
      return {
        ...state,
        issue: {
          ...state.issue,
          ...payload,
        },
      };

    case ACTION_TYPE.SUMBIT_ISSUE_FORM:
      return {
        ...state,
        requestStatus: REQUEST_STATUS.PENDING,
        requestError: undefined,
      };

    case `${ACTION_TYPE.SUMBIT_ISSUE_FORM}${ACTION_TYPE_SUFIX.SUCCESS}`:
      return {
        ...state,
        requestStatus: REQUEST_STATUS.SUCCESS,
        issue: {},
        requestError: undefined,
      };

    case `${ACTION_TYPE.SUMBIT_ISSUE_FORM}${ACTION_TYPE_SUFIX.ERROR}`:
      return {
        ...state,
        requestStatus: REQUEST_STATUS.ERROR,
        requestError: payload,
      };

    case ACTION_TYPE.TOGGLE_ISSUE_FORM:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};

export default reducer;
