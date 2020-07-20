import React, { Fragment } from "react";
import Home from "./containers/Home/Home";
import ImageProvider from "./context/ImageContext/ImageProvider";

function App() {
	return (
		<Fragment>
			<ImageProvider>
				<Home />
			</ImageProvider>
		</Fragment>
	);
}

export default App;
