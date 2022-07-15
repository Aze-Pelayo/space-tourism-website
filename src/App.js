import React from "react";
import { Routes, Route } from "react-router-dom";
import Crew from "./pages/crew/Crew";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Technology from "./pages/technology/Technology";
import Nav from "./shared/nav/Nav";

function App() {

	return (
		<div>
			<Nav />

			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="destination" element={<Destination />} />
				<Route path="crew" element={<Crew  />} />
				<Route path="technology" element={<Technology />} />
			</Routes>
		</div>
	);
}

export default App;
