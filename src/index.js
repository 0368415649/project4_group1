import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { default as ModalProvider } from './contexts/Modal';
import { default as UserProvider } from './contexts/User';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <ModalProvider>
      <div id="recaptcha"></div>
      <App />
    </ModalProvider>
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
