import { type AnyAction, type Dispatch } from 'redux';

import { deleteIssue, getIssues, updateIssue } from '../../api/issuesApi';
import { type Issue, ACTION_TYPE, ISSUE_STATUS_ARRAY } from '../../types';
import { requestDispatch } from '../../utils';
import { setIssueInForm, toggleIssueFormIsOpenDispatch } from '../IssueForm/issueFormActions';

export const getIssuesFromApi = () => requestDispatch(ACTION_TYPE.GET_ISSUES, getIssues);

export const handleIssueEdit = (issue: Issue) => (dispatch: Dispatch) => {
  dispatch(toggleIssueFormIsOpenDispatch as unknown as AnyAction);
  dispatch(setIssueInForm(issue));
};

export const handleIssueDelete = (issue: Issue) =>
  requestDispatch(ACTION_TYPE.DELETE_ISSUE, deleteIssue, issue);

export const handleStatusChange =
  (issue: Issue, incValue: -1 | 1 = 1) =>
  (dispatch: Dispatch) => {
    const currentIndex = ISSUE_STATUS_ARRAY.indexOf(issue.status);
    const newIndex = currentIndex + incValue;

    if (newIndex >= 0 && newIndex < ISSUE_STATUS_ARRAY.length) {
      const newIssue = {
        ...issue,
        status: ISSUE_STATUS_ARRAY[newIndex],
      };
      dispatch(
        requestDispatch(ACTION_TYPE.UPDATE_ISSUE, updateIssue, newIssue) as unknown as AnyAction,
      );
    }
  };
