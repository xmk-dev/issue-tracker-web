import { Card } from 'react-bootstrap';

import { IssueCardProps } from './types';

const IssueCard: React.FC<IssueCardProps> = ({ item, children }) => (
  <Card>
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>{item.description}</Card.Text>
      {children}
    </Card.Body>
  </Card>
);

export default IssueCard;
