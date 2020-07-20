import React, { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { CircularProgressbar } from "react-circular-progressbar";

import "react-toastify/dist/ReactToastify.css";
import "react-circular-progressbar/dist/styles.css";
import classes from "./Dropzone.module.css";
import ImageContext from "../../context/ImageContext/ImageContext";

function Dropzone() {
	const [selectedFile, setSelectedFile] = useState({});
	const [imagePresent, setImagePresent] = useState(false);
	const [imageLink, setImageLink] = useState(null);
	const [loadPercentage, setLoadPercentage] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const context = useContext(ImageContext);

	const imageRef = useRef();
	const inputRef = useRef();

	const dragOver = (e) => {
		e.preventDefault();
	};

	const dragEnter = (e) => {
		e.preventDefault();
	};

	const dragLeave = (e) => {
		e.preventDefault();
	};

	const toastInfo = {
		position: "bottom-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	};

	// invokes displayImage when image is dropped
	useEffect(() => {
		// check if selectedFile is not {} then execute uploadImage
		!(
			Object.keys(selectedFile).length === 0 &&
			selectedFile.constructor === Object
		) && uploadImage(selectedFile);

		// post to imgur via axios
		// upload using FormData and send to axios
	}, [selectedFile]);

	useEffect(() => {
		// passes link of image as a prop to parent
		// link(imageLink);

		context.updateImage(imageLink, false);
	}, [imageLink]);

	useEffect(() => {
		// resets the component state
		if (context.isReset && (!isLoading || imageLink)) {
			setSelectedFile({});
			setImagePresent(false);
			setImageLink(null);
			setIsLoading(false);
			setLoadPercentage(0);
		}
	}, [context.isReset, isLoading, imageLink]);

	const fileDrop = (e) => {
		e.preventDefault();
		const files = e.dataTransfer.files; // files is an array

		if (files.length === 1) {
			// runs if one file is present
			handleFiles(files[0]);
		} else {
			// alert("We only support one at a time!");
			notify.limit("We only support one image at a time!");
		}
	};

	const inputChangeHandler = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const file = e.target.files[0];
		file && handleFiles(file);
	};

	const notify = {
		limit: (msg) => toast.warn(msg, { ...toastInfo }),
		invalid: (msg) => toast.error(msg, { ...toastInfo }),
		api: (err) => toast.error(err, { ...toastInfo }),
	};

	const handleFiles = (file) => {
		if (validateFile(file)) {
			// update selected file state
			setSelectedFile(file);
		} else {
			notify.invalid("File type not supported");
		}
	};

	// checks if input file matches any of mentioned categories
	const validateFile = (file) => {
		const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
		if (validTypes.indexOf(file.type) === -1) {
			return false;
		}

		return true;
	};

	const displayImage = (link) => {
		// sets image is loading as false
		setIsLoading(false);

		// sets image link as returned from post req
		setImageLink(link);

		// sets src attr of image tag
		imageRef.current.src = link;
	};

	const uploadImage = (file) => {
		const formData = new FormData();
		formData.append("image", file);

		const config = {
			method: "post",
			url: "https://api.imgur.com/3/image",
			headers: {
				Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`,
			},
			data: formData,
			onUploadProgress: (progressEvent) => {
				const uploadPercentage = Math.floor(
					(progressEvent.loaded / progressEvent.total) * 100
				);
				setIsLoading(true); // shows the progress loader
				setImagePresent(true); // clears the dropzone area
				setLoadPercentage(uploadPercentage); // starts upload bar
			},
		};

		axios(config)
			.then((res) => {
				// console.log(res.data);
				displayImage(res.data.data.link);
			})
			.catch((err) => notify.api(err.message));
	};

	return (
		<div
			className={[
				classes.DropContainer,
				!imagePresent && "rounded-lg border-gray-500 border-2 border-dashed",
			].join(" ")}
			onDragOver={dragOver}
			onDragEnter={dragEnter}
			onDragLeave={dragLeave}
			onDrop={fileDrop}
			onClick={() => inputRef.current.click()}
		>
			{!imagePresent ? (
				<div className={classes.DropMessage}>
					<div className={classes.UploadIcon}></div>
					Drag & Drop files here or click to upload
				</div>
			) : loadPercentage === 100 && !isLoading ? (
				<img ref={imageRef} alt="Upload Data" />
			) : (
				<CircularProgressbar
					className="m-auto h-24"
					value={loadPercentage}
					text={`${loadPercentage}%`}
				/>
			)}

			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

			<input
				type="file"
				ref={inputRef}
				className="hidden"
				onChange={inputChangeHandler}
			/>
		</div>
	);
}

export default Dropzone;
