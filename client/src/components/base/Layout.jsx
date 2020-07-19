import React from "react";

const Layout = ({ children, className }) => (
	<div className={["mx-auto w-10/12", className].join(" ")}>{children}</div>
);

export default Layout;
