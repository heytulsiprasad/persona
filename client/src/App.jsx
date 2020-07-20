import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import ImageProvider from "./context/ImageContext/ImageProvider";

function App() {
	return (
		<Fragment>
			<ImageProvider>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
					</Switch>
				</Router>
			</ImageProvider>
		</Fragment>
	);
}

export default App;
