import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import { NotFound } from './components/NotFound';
import { CompoundComponents } from './components/patterns/CompoundComponents/CompoundComponents';

const App = () => (
	<Router>
		<Switch>
			<Route path="/" exact component={Container}/>
			<Route path="/hoc" component={NotFound}/>
			<Route path="/render-props" component={NotFound}/>
			<Route path="/compound-components" component={CompoundComponents}/>
			<Route path="*" component={NotFound}/>
		</Switch>
	</Router>
);

export default App;
