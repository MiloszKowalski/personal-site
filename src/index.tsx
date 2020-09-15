import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
import './index.scss';
import App from './App';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);