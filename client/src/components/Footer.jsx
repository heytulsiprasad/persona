import React from "react";

const Footer = () => {
	return (
		<div className="bg-blue-900 py-12 px-40 sm:px-12 h-56 lg:h-64 text-white flex lg:flex-col justify-between">
			<div className="flex flex-col lg:space-y-4 justify-between">
				<div>
					<h1>A creative agency in Philadelphia</h1>
					<h2>Powered by Fantasticly</h2>
				</div>
				<div>
					<h3 className="text-gray-500 text-sm">
						Copyright &copy;{new Date().getFullYear()}. All Rights Reserved.
					</h3>
				</div>
			</div>
			<div className="space-x-4 lg:mt-6">
				<a href="!#">Twitter</a>
				<a href="!#">Github</a>
				<a href="!#">ThePracticalDev</a>
			</div>
		</div>
	);
};

export default Footer;
