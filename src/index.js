import React from 'react'
import ReactDOM from 'react-dom'
import './style/css/index.css'
import './style/css/normalize.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);

serviceWorker.unregister();
