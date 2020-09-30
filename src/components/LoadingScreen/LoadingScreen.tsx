import React from 'react';

import { ReactComponent as HorizontalWave } from 'components/svg/HorizontalWaveMask.svg';

import './LoadingScreen.scss';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen-wrapper">
      <div className="loader">
        <div className="loader-wave-wrapper">
          <div className="loader-wave">
            <HorizontalWave />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen;
