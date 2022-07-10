import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import IssueCard from '../../components/IssueCard';
import Loader from '../../components/Loader';
import SimpleButton from '../../components/SimpleButton';
import { type StoreState } from '../../store';
import { type Issue, type IssueStatus, ISSUE_STATUS, REQUEST_STATUS } from '../../types';
import * as actions from './boardActions';
import { type BoardProps } from './types';

export const BoardContainer: React.FC<BoardProps> = ({
  issues = [],
  requestStatus,
  requestError,
  handleIssueEdit,
  handleIssueDelete,
  handleStatusChange,
}) => {
  const boardCols: Record<IssueStatus, Issue[]> = {
    [ISSUE_STATUS.PENDING]: [],
    [ISSUE_STATUS.OPEN]: [],
    [ISSUE_STATUS.CLOSED]: [],
  };

  issues.forEach((issue) => {
    boardCols[issue.status]?.push(issue);
  });

  return (
    <Container fluid>
      {requestStatus === REQUEST_STATUS.PENDING && <Loader />}
      <Row className="py-4" style={{ flexWrap: 'nowrap' }}>
        {Object.entries(boardCols).map(([colName, items]) => (
          <Col
            title={colName}
            key={colName}
            className="shadow-sm m-4 text-center"
            style={{
              float: 'none',
              minHeight: '80vh',
              background: '#FFFFFF99',
              minWidth: '300px',
            }}
          >
            <h3 className="my-2 text-uppercase display-6">{colName}</h3>
            {items.map((issue) => (
              <IssueCard item={issue} key={issue.id}>
                {issue.status !== ISSUE_STATUS.CLOSED && (
                  <>
                    <SimpleButton materialIconName="edit" onClick={() => handleIssueEdit(issue)} />
                    <SimpleButton
                      materialIconName="delete"
                      onClick={() => handleIssueDelete(issue)}
                    />
                    <SimpleButton
                      materialIconName="chevron_left"
                      onClick={() => handleStatusChange(issue, -1)}
                    />
                    <SimpleButton
                      materialIconName="chevron_right"
                      onClick={() => handleStatusChange(issue, 1)}
                    />
                  </>
                )}
              </IssueCard>
            ))}
          </Col>
        ))}
      </Row>
      {requestError && (
        <Row>
          <h2 className="text-danger">{requestError.message}</h2>
        </Row>
      )}
    </Container>
  );
};

const mapStateToProps = ({ board }: StoreState) => board;

const mapDispatchToProps = {
  handleIssueEdit: actions.handleIssueEdit,
  handleIssueDelete: actions.handleIssueDelete,
  handleStatusChange: actions.handleStatusChange,
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
