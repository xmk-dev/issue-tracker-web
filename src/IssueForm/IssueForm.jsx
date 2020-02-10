import React from 'react';
import { shape, string, func, object } from 'prop-types';
import { connect } from 'react-redux';
import { PENDING } from '../constants/RequestStatuses'
import TextInput from './IssueFormComponents/TextInput';
import { setIssueFormElement, submitIssueForm } from './issueFormActions';
import Loader from '../common/Loader';

export const IssueForm = ({
    issue: { title, description },
    handleIssueElementChange,
    handleSubmit,
    requestStatus,
    requestError
}) => (
        <div className="container-fluid mw-50">
            <Loader isLoading={requestStatus === PENDING} />
            <TextInput
                title="Title"
                value={title}
                onChange={handleIssueElementChange.bind(this, 'title')} />
            <TextInput
                title="Description"
                value={description}
                onChange={handleIssueElementChange.bind(this, 'description')} />
            {requestError && <div className="row text-danger">
                <small>
                    {requestError.message}
                </small>
            </div>}
            <button className="btn btn-light shadow rounded-circle d-flex justify-content-center align-content-between p-2 mx-auto"
                onClick={handleSubmit}>
                <i className="material-icons">save</i>
            </button>
        </div>
    );

IssueForm.propTypes = {
    issue: shape({
        title: string,
        description: string,
    }),
    requestStatus: string,
    requestError: object,
    handleIssueElementChange: func.isRequired,
    handleSubmit: func.isRequired
};

const mapStateToProps = ({
    issueFormState: { issue, requestStatus, requestError }
}) => ({
    issue,
    requestStatus,
    requestError,
});

const mapDispatchToProps = {
    handleIssueElementChange: setIssueFormElement,
    handleSubmit: submitIssueForm
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueForm)
