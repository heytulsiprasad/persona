import React, { useState } from "react";

import Logo from "../assets/logo.svg";

const NavBar = () => {
	const [title, setTitle] = useState(null);

	const titleAPI = async () => {
		const gotTitle = await (await fetch("http://localhost:9000/test")).text();
		setTitle(gotTitle);
	};

	titleAPI();

	return (
		<nav className="flex items-center justify-center md:flex-col md:space-y-8 border-solid border-b border-gray-400 py-8 px-48 lg:px-32">
			<div className="flex items-center md:mx-auto space-x-1 mr-auto">
				<img src={Logo} alt="logo" className="h-10" />
				<h1 className="text-xl font-bold">{title}</h1>
			</div>
			<div className="flex font-bold space-x-4 md:ml-4">
				<div>
					<h2 className="text-lg">Login</h2>
				</div>
				<div>
					<h2 className="text-lg">About</h2>
				</div>
				<div>
					<h2 className="text-lg">Dashboard</h2>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
