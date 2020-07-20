import React, { Component } from "react";
import ImageContext from "./ImageContext";

class ImageProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			copySuccess: "Copy to Clipboard",
			isCopied: false,
			imgLink: null,
			isReset: false,
			updateCopy: this.updateCopy,
			updateAllState: this.updateAllState,
			updateImage: this.updateImage,
		};
	}
	updateCopy = (success, copy) => {
		this.setState((state) => ({
			...state,
			copySuccess: success,
			isCopied: copy,
		}));
	};

	updateAllState = (success, copy, img, reset) => {
		this.setState({
			copySuccess: success,
			isCopied: copy,
			imgLink: img,
			isReset: reset,
		});
	};

	updateImage = (link, reset) => {
		this.setState((state) => ({ ...state, imgLink: link, isReset: reset }));
	};

	render() {
		return (
			<ImageContext.Provider value={this.state}>
				{this.props.children}
			</ImageContext.Provider>
		);
	}
}

export default ImageProvider;
