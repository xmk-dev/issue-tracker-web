import { PayloadAction } from '@reduxjs/toolkit';

import type { ActionType, Issue, RequestError, RequestStatus } from '../../types';

export interface BoardProps {
  issues?: Issue[];
  requestError: RequestError;
  requestStatus: RequestStatus;
  handleIssueEdit: (issue: Issue) => void;
  getIssuesFromApi: () => Promise<unknown>;
  handleIssueDelete: (issue: Issue) => Promise<unknown>;
  handleStatusChange: (issue: Issue, incValue?: -1 | 1) => void;
}

export interface BoardState {
  issues: Issue[];
  requestError?: RequestError;
  requestStatus: RequestStatus;
}

export type IssueFormPayloadAction = PayloadAction<Issue | Issue[] | RequestError, ActionType>;

export type BoardReducer = (state: BoardState, payloadAction: IssueFormPayloadAction) => void;
