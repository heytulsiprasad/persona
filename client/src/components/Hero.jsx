import React, { Component } from "react";

import Dropzone from "./Dropzone/Dropzone";

class Hero extends Component {
	constructor(props) {
		super(props);

		this.state = {
			copySuccess: "Copy to Clipboard",
			isCopied: false,
			imgLink: null,
			isReset: false,
		};
	}

	copyToClipboard = (e) => {
		this.mainLink.select();
		document.execCommand("copy");
		e.target.focus();
		this.setState((state) => ({
			...state,
			copySuccess: "Copied!",
			isCopied: true,
		}));

		// sets copy button text to back to initial state
		setTimeout(() => {
			this.setState((state) => ({
				...state,
				isCopied: false,
				copySuccess: "Copy to Clipboard",
			}));
		}, 2000);
	};

	updateImageLink = (link) => {
		this.setState((state) => ({ ...state, imgLink: link, isReset: false }));
	};

	resetAll = () => {
		this.setState({
			copySuccess: "Copy to Clipboard",
			isCopied: false,
			imgLink: null,
			isReset: true,
		});

		// imgLink will be updated when `updateImageLink` will be invoked
	};

	render() {
		const copyColor = this.state.isCopied ? "green" : "red";

		return (
			<div className="flex flex-col space-y-16 justify-center items-center mt-6 px-6 sm:px-0 py-12">
				<div className="w-10/12 xl:w-3/4 lg:w-11/12">
					<Dropzone
						isReset={this.state.isReset}
						link={(link) => this.updateImageLink(link)}
					/>
				</div>
				<div className="w-1/2 xl:w-3/5 lg:w-3/4 px-12 sm:px-0 self-center xl:mt-12">
					<h1 className="text-4xl xl:text-3xl xl:text-center">
						Your Magic Link{" "}
						<span role="img" aria-label="magic">
							🔮
						</span>
					</h1>
					<div className="w-full mt-4 pt-2 px-1">
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4"
							ref={(mainLink) => (this.mainLink = mainLink)}
							type="text"
							value={this.state.imgLink ? this.state.imgLink : "No Image"}
							placeholder="Link from Imgur"
							readOnly
						/>
					</div>
					<div className="mt-4 ml-1 space-y-2">
						<button
							onClick={this.copyToClipboard}
							className={`bg-${copyColor}-500 w-full hover:bg-${copyColor}-400 text-white font-bold py-2 px-4 border-b-4 border-${copyColor}-700 hover:border-${copyColor}-500 rounded`}
						>
							{this.state.copySuccess}
						</button>
						<button
							onClick={this.resetAll}
							className="bg-indigo-500 w-full hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded"
						>
							Reset All
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Hero;
