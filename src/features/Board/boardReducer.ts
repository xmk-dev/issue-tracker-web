import { type Issue, ACTION_TYPE, ACTION_TYPE_SUFIX, REQUEST_STATUS } from '../../types';
import type { BoardReducer, BoardState } from './types';

export const initialState: BoardState = {
  issues: [],
  requestError: undefined,
  requestStatus: REQUEST_STATUS.SUCCESS,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const reducer: BoardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.GET_ISSUES:
      return {
        ...state,
        requestStatus: REQUEST_STATUS.PENDING,
        requestError: undefined,
      };

    case `${ACTION_TYPE.GET_ISSUES}${ACTION_TYPE_SUFIX.SUCCESS}`:
      return {
        ...state,
        issues: payload,
        requestStatus: REQUEST_STATUS.SUCCESS,
        requestError: undefined,
      };

    case `${ACTION_TYPE.DELETE_ISSUE}${ACTION_TYPE_SUFIX.ERROR}`:
    case `${ACTION_TYPE.UPDATE_ISSUE}${ACTION_TYPE_SUFIX.ERROR}`:
    case `${ACTION_TYPE.GET_ISSUES}${ACTION_TYPE_SUFIX.ERROR}`:
      return {
        ...state,
        requestStatus: REQUEST_STATUS.ERROR,
        requestError: payload,
      };

    case ACTION_TYPE.ADD_ISSUE:
      return {
        ...state,
        issues: [...state.issues, payload],
      };

    case ACTION_TYPE.UPDATE_ISSUE:
      return {
        ...state,
        issues: [...state.issues.filter((item) => item.id !== (payload as Issue)?.id), payload],
        requestError: undefined,
      };

    case ACTION_TYPE.UPDATE_ISSUE_IN_PLACE:
      return {
        ...state,
        issues: state.issues.map((item) =>
          item.id !== (payload as Issue)?.id ? item : { ...item, ...payload },
        ),
        requestError: undefined,
      };

    case `${ACTION_TYPE.DELETE_ISSUE}${ACTION_TYPE_SUFIX.SUCCESS}`:
    case `${ACTION_TYPE.UPDATE_ISSUE}${ACTION_TYPE_SUFIX.SUCCESS}`:
      return {
        ...state,
        requestStatus: REQUEST_STATUS.SUCCESS,
        requestError: undefined,
      };

    case ACTION_TYPE.DELETE_ISSUE:
      return {
        ...state,
        issues: state.issues.filter((item) => item.id !== (payload as Issue)?.id),
        requestError: undefined,
      };

    default:
      return state;
  }
};

export default reducer;
