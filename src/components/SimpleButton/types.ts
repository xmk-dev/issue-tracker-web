import { ReactNode } from 'react';

export const BUTTON_TYPE = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset',
} as const;

type ButtonTypeKeys = keyof typeof BUTTON_TYPE;
export type ButtonType = typeof BUTTON_TYPE[ButtonTypeKeys] | undefined;

export interface SimpleButtonProps {
  onClick: () => void;
  materialIconName?: string;
  children?: ReactNode;
  type?: ButtonType;
}
