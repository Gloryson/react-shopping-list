import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
);

reportWebVitals();
