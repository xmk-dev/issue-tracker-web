import request from '../utils/request';

export const API_BASE_URL = 'https://issue-tracker-api-kmsnx.herokuapp.com';
export const ISSUES_ENDPOINT = '/issues';
export const HEADERS = {
  'Content-Type': 'application/json',
};

export const createIssue = (issue) => request(
  `${API_BASE_URL}${ISSUES_ENDPOINT}`,
  'POST',
  issue,
  null,
  HEADERS,
);

export const getIssues = () => request(
  `${API_BASE_URL}${ISSUES_ENDPOINT}`,
);

export const updateIssue = (issue) => request(
  `${API_BASE_URL}${ISSUES_ENDPOINT}/${issue._id}`,
  'PUT',
  issue,
  null,
  HEADERS,
);

export const deleteIssue = (issue) => request(
  `${API_BASE_URL}${ISSUES_ENDPOINT}/${issue._id}`,
  'DELETE',
);
