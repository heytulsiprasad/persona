import React from "react";

import classes from "./Home.module.css";
import NavBar from "../../components/NavBar";
import Layout from "../../components/base/Layout";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

function Home() {
	return (
		<div className={classes.Home}>
			<NavBar />
			<Layout className={classes.HomeContent}>
				<Hero />
			</Layout>
			<Footer />
		</div>
	);
}

export default Home;
