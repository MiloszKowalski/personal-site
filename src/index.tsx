import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
import App from './App';

import './i18n';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);