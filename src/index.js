import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerMyServiceWorker from './registerMyServiceWorker';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
registerMyServiceWorker();
