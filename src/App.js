import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import { NotFound } from './components/NotFound';
import { CompoundComponents } from './components/patterns/CompoundComponents/CompoundComponents';
import { RenderProps } from './components/patterns/RenderProps/RenderProps';
import HOC from './components/patterns/HigherOrderComponent/HOC';
import { LayoutComponent } from './components/patterns/LayoutComponent/LayoutComponent';

const App = () => (
	<Router>
		<Switch>
			<Route path="/" exact component={Container}/>
			<Route path="/hoc" component={HOC}/>
			<Route path="/render-props" component={RenderProps}/>
			<Route path="/compound-components" component={CompoundComponents}/>
			<Route path="/layout-component" component={LayoutComponent}/>
			<Route path="*" component={NotFound}/>
		</Switch>
	</Router>
);

export default App;
