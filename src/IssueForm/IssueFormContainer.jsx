import React from 'react';
import Sidebar from 'react-sidebar';
import { bool, func, node } from 'prop-types';
import IssueForm from './IssueForm';
import { connect } from 'react-redux';
import { toggleFormIsOpen } from './issueFormActions';

export const IssueFormContainer = ({ isOpen, toggleFormIsOpen, children }) => (
    <Sidebar
        sidebar={<IssueForm />}
        open={isOpen}
        onSetOpen={toggleFormIsOpen}
        styles={{ sidebar: { background: "white" } }}
    >
        {children}
        <div className="row fixed-bottom justify-content-end p-5">
            <button
                onClick={toggleFormIsOpen}
                className="btn btn-light shadow-lg rounded-circle d-flex justify-content-center align-content-between p-2">
                <i className="material-icons">add</i>
            </button>
        </div>
    </Sidebar>
);

IssueFormContainer.defaultProps = {
    isOpen: false,
    children: null
};

IssueFormContainer.propTypes = {
    isOpen: bool,
    toggleFormIsOpen: func.isRequired,
    children: node
};

const mapStateToProps = ({ issueFormState: { isOpen } }) => ({
    isOpen
});

const mapDispatchToProps = {
    toggleFormIsOpen
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueFormContainer)
