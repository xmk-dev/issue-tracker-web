import { ReactNode } from 'react';

import type { Issue } from '../../types';

export interface IssueCardProps {
  item: Issue;
  children?: ReactNode;
}
