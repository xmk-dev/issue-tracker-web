import { type AnyAction, type Dispatch } from 'redux';

import { createIssue, updateIssue } from '../../api/issuesApi';
import type { GetStoreState } from '../../store';
import { type Issue, ACTION_TYPE } from '../../types';
import { requestDispatch } from '../../utils';

export const setIssueInForm = (issue: Pick<Issue, 'title' | 'description'>) => ({
  type: ACTION_TYPE.SET_ISSUE_FORM_ELEMENT,
  payload: issue,
});

export const toggleIssueFormIsOpenDispatch = (dispatch: Dispatch) => {
  dispatch({ type: ACTION_TYPE.TOGGLE_ISSUE_FORM });
  dispatch(setIssueInForm({ title: '', description: '' }));
};

export const toggleIssueFormIsOpen = () => toggleIssueFormIsOpenDispatch;

export const setIssueFormElement = (key: string, value: unknown) => (dispatch: Dispatch) => {
  dispatch({
    type: ACTION_TYPE.SET_ISSUE_FORM_ELEMENT,
    payload: { [key]: value },
  });
};

export const submitIssueFormDispatch = async (dispatch: Dispatch, getState: GetStoreState) => {
  const { issue } = getState().issueForm || {};
  const callback = issue?.id ? updateIssue : createIssue;
  const newIssue = await dispatch(
    requestDispatch<Issue>(ACTION_TYPE.SUMBIT_ISSUE_FORM, callback, issue) as unknown as AnyAction,
  );
  dispatch({ type: ACTION_TYPE.ADD_ISSUE, payload: { ...newIssue } });
  dispatch(toggleIssueFormIsOpenDispatch as unknown as AnyAction);
};

export const submitIssueForm = () => submitIssueFormDispatch;
