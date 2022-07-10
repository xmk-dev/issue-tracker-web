import { HTTP_METHOD, Issue } from '../types';
import { request } from '../utils';

export const API_BASE_URL = 'https://kmsnx-issue-tracker.herokuapp.com';
export const ISSUES_ENDPOINT = '/issues';
export const HEADERS: RequestInit['headers'] = {
  'Content-Type': 'application/json',
};

export const createIssue = (issue: Issue) =>
  request<Issue>(`${API_BASE_URL}${ISSUES_ENDPOINT}`, HTTP_METHOD.POST, issue, undefined, HEADERS);

export const getIssues = () => request<Issue[]>(`${API_BASE_URL}${ISSUES_ENDPOINT}`);

export const updateIssue = (issue: Issue) =>
  request<Issue>(
    `${API_BASE_URL}${ISSUES_ENDPOINT}/${issue.id}`,
    HTTP_METHOD.PUT,
    issue,
    undefined,
    HEADERS,
  );

export const deleteIssue = (issue: Issue) =>
  request<never>(`${API_BASE_URL}${ISSUES_ENDPOINT}/${issue.id}`, HTTP_METHOD.DELETE);
