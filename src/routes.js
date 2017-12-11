import React from 'react';
import { Router, Route } from 'react-router';
import ComponentContainer from './assets/components/component-container';
import NotFound from './assets/components/not-found';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={ComponentContainer} />
		<Route path="/items" component={ComponentContainer} />
		<Route path="/items/:id" component={ComponentContainer} />
		<Route path="*" component={NotFound} />
	</Router>
);

export default Routes;