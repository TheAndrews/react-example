import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/index.css';
// import ComponentContainer from './assets/components/component-container';
//import registerServiceWorker from './registerServiceWorker';
import { browserHistory } from 'react-router';
import Routes from './routes';
// ReactDOM.render(<ComponentContainer />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
    <Routes history={browserHistory} />,
    document.getElementById('root')
  );