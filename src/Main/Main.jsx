import React from 'react';
import Lottie from 'react-lottie';
import BoardContainer from '../Board/BoardContainer';
import animationData from '../animations/working';
import IssueFormContainer from '../IssueForm/IssueFormContainer';

const Main = () => (
  <div className="container-fluid" style={{ height: '100vh' }}>
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData
      }}
      height="100vh"
      style={{ position: 'fixed', zIndex: -1 }} />
    <div className="row">
      <IssueFormContainer>
        <BoardContainer />
      </IssueFormContainer>
    </div>
  </div>
);

export default Main;
