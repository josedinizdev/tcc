import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import Common from './common';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <Common />
    <Routes />
  </React.StrictMode>
);
