import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="destination">Destination</Link>
			<Link to="crew">Crew</Link>
			<Link to="technology">Technology</Link>
		</nav>
	);
}

export default Nav;
