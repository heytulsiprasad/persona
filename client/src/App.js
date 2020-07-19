import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Dashboard from "./containers/Dashboard/Dashboard";

function App() {
	return (
		<Fragment>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/dashboard">
						<Dashboard />
					</Route>
				</Switch>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
