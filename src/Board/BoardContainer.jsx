import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  arrayOf, shape, string, func,
} from 'prop-types';
import Issue from '../models/issue';
import * as RequestStatuses from '../constants/RequestStatuses';
import * as IssuesStates from '../constants/IssuesStates';
import Board from './BoardComponents/Board';
import BoardColumn from './BoardComponents/BoardColumn';
import BoardItem from './BoardComponents/BoardItem';
import * as actions from './boardActions';
import Loader from '../common/Loader';

export const BoardContainer = ({
  issues,
  getIssuesFromApi,
  requestStatus,
  requestError,
  handleIssueEdit,
  handleIssueDelete,
  handleStateChange,
}) => {
  useEffect(() => {
    getIssuesFromApi();
  }, []);

  const boardCols = {
    [IssuesStates.PENDING]: [],
    [IssuesStates.OPEN]: [],
    [IssuesStates.CLOSED]: [],
  };

  issues.forEach((issue) => {
    boardCols[issue.state].push(issue);
  });

  return (
    <div className="container-fluid">
      <Loader isLoading={requestStatus === RequestStatuses.PENDING} />
      <Board>
        {Object.entries(boardCols).map(([stateName, items]) => (
          <BoardColumn title={stateName} key={stateName}>
            {items.map((issue) => (
              <BoardItem
                item={issue}
                key={issue._id}
                disabled={stateName === IssuesStates.CLOSED}
                onEdit={handleIssueEdit.bind(this, issue)}
                onDelete={handleIssueDelete.bind(this, issue)}
                nextState={handleStateChange.bind(
                  this, issue, 1,
                )}
                prevState={handleStateChange.bind(
                  this, issue, -1,
                )}
              />
            ))}
          </BoardColumn>
        ))}
      </Board>
      {requestError && (
      <div className="row">
        <h2 className="text-danger">{requestError.message}</h2>
      </div>
      )}
    </div>
  );
};

BoardContainer.defaultProps = {
  issues: [],
  requestStatus: RequestStatuses.SUCCESS,
  requestError: null,
};

BoardContainer.propTypes = {
  issues: arrayOf(shape(Issue)),
  requestStatus: string,
  getIssuesFromApi: func.isRequired,
  handleIssueEdit: func.isRequired,
  handleIssueDelete: func.isRequired,
  handleStateChange: func.isRequired,
  requestError: shape({
    message: string,
  }),
};

const mapStateToProps = ({ boardState }) => boardState;

const mapDispatchToProps = {
  getIssuesFromApi: actions.getIssuesFromApi,
  handleIssueEdit: actions.handleIssueEdit,
  handleIssueDelete: actions.handleIssueDelete,
  handleStateChange: actions.handleStateChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
