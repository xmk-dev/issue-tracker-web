export const REQUEST_STATUS = {
  ERROR: 'error',
  PENDING: 'pending',
  SUCCESS: 'success',
} as const;

type RequestStatusKeys = keyof typeof REQUEST_STATUS;
export type RequestStatus = typeof REQUEST_STATUS[RequestStatusKeys];

export const HTTP_METHOD: Record<string, RequestInit['method']> = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  HEAD: 'HEAD',
  DELETE: 'DELETE',
} as const;

export type HttpMethod = RequestInit['method'];

export interface RequestError {
  message?: string;
}
