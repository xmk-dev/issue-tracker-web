import { PayloadAction } from '@reduxjs/toolkit';

import type { ActionType, Issue, IssueStatus, RequestError, RequestStatus } from '../../types';

export interface IssueFormProps {
  issue?: Issue;
  requestError: RequestError;
  requestStatus: RequestStatus;
  handleSubmit: () => Promise<void>;
  toggleSibebarOpen: () => void;
  handleIssueElementChange: (key: keyof Issue, value: string | IssueStatus) => void;
}

export interface IssueFormState {
  issue: Issue;
  isOpen: boolean;
  isValid: boolean;
  requestError?: RequestError;
  requestStatus: RequestStatus;
}

export type IssueFormPayloadAction = PayloadAction<Issue | Issue[] | RequestError, ActionType>;

export type IssueFormReducer = (
  state: IssueFormState,
  payloadAction: IssueFormPayloadAction,
) => void;
