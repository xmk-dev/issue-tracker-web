import React, { memo } from 'react';
import { bool } from 'prop-types';
import Lottie from 'react-lottie';
import animationData from '../animations/loading';

const Loader = ({ isLoading }) => (
    <div>
        {isLoading && <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 'auto',
            background: 'rgba(255,255,255,0.8)'
        }}>
            <Lottie
                options={{ loop: true, autoplay: true, animationData }}
                height="100px" />
        </div>}
    </div>
);

Loader.defaultProps = {
    isLoading: false
};

Loader.propTypes = {
    isLoading: bool.isRequired
};

export default memo(Loader);
