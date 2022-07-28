import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import Common from './common';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Common />
    <Routes />
  </React.StrictMode>
);
