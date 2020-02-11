import React from 'react';
import Sidebar from 'react-sidebar';
import { bool, func, node } from 'prop-types';
import { connect } from 'react-redux';
import IssueForm from './IssueForm';
import { toggleFormIsOpen } from './issueFormActions';

export const IssueFormContainer = ({ isOpen, toggleSibebarOpen, children }) => (
  <Sidebar
    sidebar={<IssueForm />}
    open={isOpen}
    onSetOpen={toggleSibebarOpen}
    styles={{ sidebar: { background: 'white' } }}
  >
    {children}
    <div className="row fixed-bottom justify-content-end p-5">
      <button
        type="button"
        onClick={toggleSibebarOpen}
        className="btn btn-light shadow-lg rounded-circle d-flex justify-content-center align-content-between p-2"
      >
        <i className="material-icons">add</i>
      </button>
    </div>
  </Sidebar>
);

IssueFormContainer.defaultProps = {
  isOpen: false,
  children: null,
};

IssueFormContainer.propTypes = {
  isOpen: bool,
  toggleSibebarOpen: func.isRequired,
  children: node,
};

const mapStateToProps = ({ issueFormState: { isOpen } }) => ({
  isOpen,
});

const mapDispatchToProps = {
  toggleSibebarOpen: toggleFormIsOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueFormContainer);
