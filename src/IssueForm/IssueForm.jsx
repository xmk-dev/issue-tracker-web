import React from 'react';
import {
  shape, string, func,
} from 'prop-types';
import { connect } from 'react-redux';
import { PENDING, SUCCESS } from '../constants/RequestStatuses';
import TextInput from './IssueFormComponents/TextInput';
import { setIssueFormElement, submitIssueForm } from './issueFormActions';
import Loader from '../common/Loader';

export const IssueForm = ({
  issue: { title, description },
  handleIssueElementChange,
  handleSubmit,
  requestStatus,
  requestError,
}) => (
  <div className="container-fluid">
    <Loader isLoading={requestStatus === PENDING} />
    <TextInput
      title="Title"
      value={title}
      onChange={handleIssueElementChange.bind(this, 'title')}
    />
    <TextInput
      title="Description"
      value={description}
      onChange={handleIssueElementChange.bind(this, 'description')}
    />
    {requestError && (
    <div className="row text-danger">
      <small>
        {requestError.message}
      </small>
    </div>
    )}
    <button
      type="button"
      className="btn btn-light shadow rounded-circle d-flex justify-content-center align-content-between p-2 mx-auto"
      onClick={handleSubmit}
    >
      <i className="material-icons">save</i>
    </button>
  </div>
);

IssueForm.defaultProps = {
  issue: {
    title: '',
    description: '',
  },
  requestStatus: SUCCESS,
  requestError: null,
};

IssueForm.propTypes = {
  issue: shape({
    title: string,
    description: string,
  }),
  requestStatus: string,
  requestError: shape({
    message: string,
  }),
  handleIssueElementChange: func.isRequired,
  handleSubmit: func.isRequired,
};

const mapStateToProps = ({
  issueFormState: { issue, requestStatus, requestError },
}) => ({
  issue,
  requestStatus,
  requestError,
});

const mapDispatchToProps = {
  handleIssueElementChange: setIssueFormElement,
  handleSubmit: submitIssueForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueForm);
