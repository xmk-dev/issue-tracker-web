import ActionTypes from '../constants/ActionTypes';
import requestDispatch from '../utils/requestDispatch';
import { getIssues, deleteIssue, updateIssue } from '../api/issuesApi';
import {
  toggleFormIsOpen,
  setIssueInForm,
} from '../IssueForm/issueFormActions';
import * as IssuesStates from '../constants/IssuesStates';

export const getIssuesFromApi = () => requestDispatch(
  ActionTypes.GET_ISSUES,
  getIssues,
);

export const handleIssueEdit = (issue) => (dispatch) => {
  dispatch(setIssueInForm(issue));
  dispatch(toggleFormIsOpen());
};

export const handleIssueDelete = (issue) => requestDispatch(
  ActionTypes.DELETE_ISSUE,
  deleteIssue,
  issue,
);

export const handleStateChange = (issue, incValue = 1) => (dispatch) => {
  const states = [IssuesStates.PENDING, IssuesStates.OPEN, IssuesStates.CLOSED];
  const currentIdx = states.findIndex((i) => i === issue.state);
  const newIdx = currentIdx + incValue;
  if (newIdx >= 0 && newIdx < states.length) {
    const newIssue = {
      ...issue,
      state: states[newIdx],
    };
    console.log(newIssue);
    dispatch(requestDispatch(ActionTypes.UPDATE_ISSUE, updateIssue, newIssue));
  }
};
