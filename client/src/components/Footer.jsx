import React from "react";

const Footer = () => {
	return (
		<div className="bg-blue-900 py-12 px-40 sm:px-12 h-56 lg:h-64 text-white flex lg:flex-col justify-between">
			<div className="flex flex-col lg:space-y-4 justify-between">
				<div>
					<h1>An idea bought to life with code</h1>
					<h2>
						Powered by{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://imgur.com/"
						>
							Imgur
						</a>
					</h2>
				</div>
				<div>
					<h3 className="text-gray-500 text-sm">
						Icons by{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://feathericons.com/"
						>
							Feather
						</a>{" "}
						and{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.flaticon.com/"
						>
							FlatIcon
						</a>
					</h3>
				</div>
			</div>
			<div className="space-x-4 lg:mt-6">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://bit.ly/heytulsi-twitter"
				>
					Twitter
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://bit.ly/hey-github"
				>
					Github
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://bit.ly/hey-devto"
				>
					ThePracticalDev
				</a>
			</div>
		</div>
	);
};

export default Footer;
