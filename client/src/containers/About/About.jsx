import React, { Component } from "react";

import classes from "./About.module.css";
import NavBar from "../../components/NavBar";
import Layout from "../../components/base/Layout";
import Footer from "../../components/Footer";
import Features from "./../../components/Features";

class About extends Component {
	render() {
		return (
			<div className={classes.About}>
				<NavBar />
				<Layout className={classes.AboutContent}>
					<Features />
				</Layout>
				<Footer />
			</div>
		);
	}
}

export default About;
