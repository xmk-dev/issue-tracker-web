import ActionTypes from '../constants/ActionTypes';
import requestDispatch from '../utils/requestDispatch';
import { createIssue, updateIssue } from '../api/issuesApi';

export const setIssueInForm = (issue) => ({
  type: ActionTypes.SET_ISSUE_FORM_ELEMENT,
  payload: issue,
});

export const toggleFormIsOpen = () => (dispatch) => {
  dispatch({ type: ActionTypes.TOGGLE_ISSUE_FORM });
  dispatch(setIssueInForm({}));
};

export const setIssueFormElement = (key, value) => (dispatch) => {
  dispatch({
    type: ActionTypes.SET_ISSUE_FORM_ELEMENT,
    payload: { [key]: value },
  });
};

export const submitIssueForm = (issue) => (dispatch) => {
  const func = issue._id ? updateIssue : createIssue;
  dispatch(requestDispatch(ActionTypes.SUMBIT_ISSUE_FORM, func, issue));
};
