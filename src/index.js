import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/is-it-raining-outside/service-worker.js',{
    scope: "/is-it-raining-outside/"
  })
  .then((reg)=>{console.log('Service Worker Registered', reg)})
  .catch((err)=>{console.log('Registration Failed', err)})
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);