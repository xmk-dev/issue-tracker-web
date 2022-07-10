import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { type BoardState, boardInitialState, boardReducer } from './features/Board';
import { type IssueFormState, issueFormInitialState, issueFormReducer } from './features/IssueForm';

export interface StoreState {
  board?: BoardState;
  issueForm?: IssueFormState;
}

export type GetStoreState = () => StoreState;

const initialState: StoreState = {
  board: boardInitialState,
  issueForm: issueFormInitialState,
};

export default createStore(
  combineReducers({ board: boardReducer, issueForm: issueFormReducer }),
  initialState as any,
  applyMiddleware(thunk),
);
