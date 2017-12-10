import React from 'react';
import { Router, Route } from 'react-router';
import ComponentContainer from './assets/components/component-container';

// import App from './components/App';
// import About from './components/About';
// import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={ComponentContainer} />
    <Route path="/items" component={ComponentContainer} />
    <Route path="/items/:id" component={ComponentContainer} />
    {/* <Route path="/about" component={About} />
    <Route path="*" component={NotFound} /> */}
  </Router>
);

export default Routes;