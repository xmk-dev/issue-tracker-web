import Lottie from 'lottie-react';

import animationData from '../../animations/loading.json';

const Loader: React.FC = () => (
  <div
    style={{
      margin: 'auto',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: '#FFFFFF90',
      position: 'fixed',
      zIndex: 99,
    }}
  >
    <Lottie animationData={animationData} loop autoplay height="100px" />
  </div>
);

export default Loader;
