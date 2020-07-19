import React from "react";

import NavBar from "./../components/NavBar";
import Layout from "../components/base/Layout";
import Hero from "./../components/Hero";
import Features from "./../components/Features";
import Footer from "./../components/Footer";

function Home() {
	return (
		<div className="App">
			<NavBar />
			<Layout>
				<Hero />
				<Features />
			</Layout>
			<Footer />
		</div>
	);
}

export default Home;
