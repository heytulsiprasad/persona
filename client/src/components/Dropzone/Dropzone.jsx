import React, { useState, useRef, useEffect } from "react";
import classes from "./Dropzone.module.css";

import bg from "../../assets/bg.jpg";

function Dropzone() {
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");
	const [image, setImage] = useState(false);

	const imageRef = useRef();

	const dragOver = (e) => {
		e.preventDefault();
	};

	const dragEnter = (e) => {
		e.preventDefault();
	};

	const dragLeave = (e) => {
		e.preventDefault();
	};

	// invokes displayImage when image is dropped
	useEffect(() => {
		// console.log(selectedFiles);
		selectedFiles.length === 1 && displayImage(selectedFiles[0]);

		// post to imgur via axios
		// upload using FormData and send to axios
	}, [selectedFiles]);

	const fileDrop = (e) => {
		e.preventDefault();
		const files = e.dataTransfer.files;

		if (files.length === 1) {
			// runs if one file is present
			handleFiles(files);
			// console.log(files[0]);

			// displayImage(selectedFiles[0]);
		} else {
			alert("We only support one at a time!");
		}
	};

	const handleFiles = (files, callback) => {
		for (let i = 0; i < files.length; i++) {
			if (validateFile(files[i])) {
				// add to an array so we can display the name of file
				setSelectedFiles((prevArray) => [...prevArray, files[i]]);
				// console.log(selectedFiles);
			} else {
				// add a new property called invalid
				files[i]["invalid"] = true;

				// update selected files array with the new file object with invalid type
				setSelectedFiles((prevArray) => [...prevArray, files[i]]);

				// set error message
				setErrorMessage("File type not permitted");
			}
		}
	};

	// checks if input file matches any of mentioned categories
	const validateFile = (file) => {
		const validTypes = [
			"image/jpeg",
			"image/jpg",
			"image/png",
			"image/gif",
			"image/x-icon",
		];
		if (validTypes.indexOf(file.type) === -1) {
			return false;
		}

		return true;
	};

	const displayImage = (file) => {
		// console.log(file);
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function (e) {
			setImage(true);
			imageRef.current.src = reader.result;
			// console.log(reader.result);
			// set the content of imageRef div as the image tag
		};
	};

	return (
		<div
			className={[
				classes.DropContainer,
				"rounded-lg border-gray-500 border-2 border-dashed",
			].join(" ")}
			onDragOver={dragOver}
			onDragEnter={dragEnter}
			onDragLeave={dragLeave}
			onDrop={fileDrop}
		>
			{!image ? (
				<div className={classes.DropMessage}>
					<div className={classes.UploadIcon}></div>
					Drag & Drop files here or click to upload
				</div>
			) : (
				<img ref={imageRef} style={{ height: "100%" }} alt="Upload Data" />
			)}
		</div>
	);
}

export default Dropzone;
