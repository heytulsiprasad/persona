import React from "react";

import one from "../assets/one.svg";
import two from "../assets/two.svg";
import three from "../assets/three.svg";
import four from "../assets/four.svg";

const Box = ({ id, title, body }) => (
	<div className="flex space-x-4">
		<div className="w-2/12 items-center">
			<img className="mx-auto h-10" src={id} alt="one" />
		</div>
		<div className="w-10/12 space-y-2 items-stretch">
			<h1 className="text-base font-bold text-blue-900">{title}</h1>
			<p className="text-sm text-blue-800">{body}</p>
		</div>
	</div>
);

const featData = [
	{
		id: one,
		title: "Encrypted Transmission",
		body:
			"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
	},
	{
		id: two,
		title: "Link-protected Access",
		body:
			"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
	},
	{
		id: three,
		title: "Data Center Security",
		body:
			"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
	},
	{
		id: four,
		title: "Compliance",
		body:
			"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
	},
];

const greedy = {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
	gridGap: "2rem",
};

const Features = () => {
	return (
		<div className="container px-6 py-12 mb-6">
			<h1 className="text-4xl font-extrabold text-indigo-900">
				Top-notch support
			</h1>
			<h2 className="text-sm font-light text-indigo-600">
				Enterprise-grade security you can trust.
			</h2>
			<div className="container mt-4 py-6">
				<div style={greedy}>
					{featData.map((item, index) => (
						<Box key={index} {...item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Features;
