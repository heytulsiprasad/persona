import React, { useState } from "react";

import Logo from "../assets/image.svg";

const NavBar = () => {
	return (
		<nav className="flex items-center justify-center md:flex-col md:space-y-8 border-solid border-b border-gray-400 py-8 px-48 lg:px-32">
			<div className="flex items-center md:mx-auto space-x-1 mr-auto">
				<img src={Logo} alt="logo" className="h-10 mr-2" />
				<h1 className="text-xl font-bold">
					<a href="/">Persona</a>
				</h1>
			</div>
			<div className="flex font-bold space-x-4 md:ml-4">
				<div>
					<a href="/" className="text-lg">
						Home
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
