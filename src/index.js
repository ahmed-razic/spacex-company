import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './serviceWorker/registerServiceWorker';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();
reportWebVitals();
