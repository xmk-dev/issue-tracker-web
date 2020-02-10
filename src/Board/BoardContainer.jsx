import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string, object } from 'prop-types';
import Issue from '../models/issue';
import * as RequestStatuses from '../constants/RequestStatuses';
import * as IssuesStates from '../constants/IssuesStates';
import Board from './BoardComponents/Board';
import BoardColumn from './BoardComponents/BoardColumn';
import BoardItem from './BoardComponents/BoardItem';
import { getIssuesFromApi, handleIssueEdit, handleIssueDelete, handleStateChange } from './boardActions';
import Loader from '../common/Loader';

export const BoardContainer = ({
    issues,
    getIssuesFromApi,
    requestStatus,
    requestError,
    handleIssueEdit,
    handleIssueDelete,
    handleStateChange
}) => {
    useEffect(() => {
        getIssuesFromApi();
    }, []);

    const boardCols = {
        [IssuesStates.PENDING]: [],
        [IssuesStates.OPEN]: [],
        [IssuesStates.CLOSED]: []
    }

    issues.forEach(issue => {
        boardCols[issue.state].push(issue);
    });

    return (
        <div className="container-fluid">
            <Loader isLoading={requestStatus === RequestStatuses.PENDING} />
            <Board>
                {Object.entries(boardCols).map(([stateName, items], colIdx) => (
                    <BoardColumn title={stateName} key={`board-col-${colIdx}`}>
                        {items.map((issue, issueIdx) => (
                            <BoardItem
                                item={issue}
                                key={`issue-${issueIdx}`}
                                disabled={stateName === IssuesStates.CLOSED}
                                onEdit={handleIssueEdit.bind(this, issue)}
                                onDelete={handleIssueDelete.bind(this, issue)}
                                nextState={handleStateChange.bind(
                                    this, issue, 1
                                )}
                                prevState={handleStateChange.bind(
                                    this, issue, -1
                                )} />
                        ))}
                    </BoardColumn>
                ))}
            </Board>
            {requestError && <div className="row">
                <h2 className="text-danger">{requestError.message}</h2>
            </div>}
        </div>
    )
};

BoardContainer.defaultProps = {
    issues: [],
    requestStatus: RequestStatuses.SUCCESS,
    requestError: null
};

BoardContainer.propTypes = {
    issues: arrayOf(shape(Issue)).isRequired,
    requestStatus: string.isRequired,
    requestError: object,
};

const mapStateToProps = ({ boardState }) => boardState;

const mapDispatchToProps = {
    getIssuesFromApi,
    handleIssueEdit,
    handleIssueDelete,
    handleStateChange
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer)
