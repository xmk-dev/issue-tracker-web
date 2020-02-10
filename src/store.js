import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import boardState, { initialState as boardInitialState } from './Board/boardReducer';
import issueFormState, { initialState as issueFormInitialState } from './IssueForm/issueFormReducer';

const initialState = {
  boardState: boardInitialState,
  issueFormState: issueFormInitialState,
};


export default createStore(
  combineReducers({ boardState, issueFormState }),
  initialState,
  applyMiddleware(thunk),
);
