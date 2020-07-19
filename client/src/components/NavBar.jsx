import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/logo.svg";

const NavBar = () => {
	return (
		<nav className="flex items-center justify-center md:flex-col md:space-y-8 border-solid border-b border-gray-400 py-8 px-48 lg:px-32">
			<div className="flex items-center md:mx-auto space-x-1 mr-auto">
				<img src={Logo} alt="logo" className="h-10" />
				<h1 className="text-xl font-bold">
					<Link to="/">Persona</Link>
				</h1>
			</div>
			<div className="flex font-bold space-x-4 md:ml-4">
				<div>
					<NavLink to="/about" className="text-lg">
						About
					</NavLink>
				</div>
				<div>
					<NavLink to="/login" className="text-lg">
						Login
					</NavLink>
				</div>
				<div>
					<NavLink
						to="/dashboard"
						activeClassName=""
						className="text-lg text-b"
					>
						Dashboard
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
