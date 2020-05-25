import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../../Pages/Home';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</div>
	);
}

export default App;
