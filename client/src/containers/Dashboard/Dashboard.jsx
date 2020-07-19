import React, { Component } from "react";

import classes from "./Dashboard.module.css";
import NavBar from "../../components/NavBar";
import Layout from "../../components/base/Layout";
import Footer from "../../components/Footer";

class Dashboard extends Component {
	render() {
		return (
			<div className={classes.Dashboard}>
				<NavBar />
				<Layout className={classes.DashContent}>
					<h1 className="container text-center text-lg font-bold mt-10">
						Dashboard not ready yet!
					</h1>
				</Layout>
				<Footer />
			</div>
		);
	}
}

export default Dashboard;
