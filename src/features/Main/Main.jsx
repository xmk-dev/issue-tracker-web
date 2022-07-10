import Lottie from 'lottie-react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import animationData from '../../animations/working.json';
import SimpleButton from '../../components/SimpleButton';
import BoardContainer, { getIssuesFromApi } from '../Board';
import IssueFormContainer, { toggleIssueFormIsOpen } from '../IssueForm';

const Main = ({ isIssueFormOpen, toggleIssueFormOpen, fetchIssuesFromApi }) => {
  useEffect(() => {
    fetchIssuesFromApi();
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Lottie
        loop
        autoplay
        height="100vh"
        animationData={animationData}
        style={{ position: 'fixed', zIndex: -1, margin: 'auto', top: 0, bottom: 0 }}
      />
      <BoardContainer />
      {isIssueFormOpen && <IssueFormContainer />}
      <div style={{ position: 'fixed', zIndex: 1, bottom: '36px', right: '36px' }}>
        <SimpleButton materialIconName="add" onClick={toggleIssueFormOpen} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ issueForm: { isOpen } }) => ({
  isIssueFormOpen: isOpen,
});

const mapDispatchToProps = {
  fetchIssuesFromApi: getIssuesFromApi,
  toggleIssueFormOpen: toggleIssueFormIsOpen,
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Main);
