import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { GlobalStyle } from "./shared/styled-components/GlobalStyle.styled";
import Crew from "./pages/crew/Crew";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Technology from "./pages/technology/Technology";
import Header from "./shared/header/Header";

function App() {
	const location = useLocation();
	
	return (
		<>
			<GlobalStyle path = {location.pathname}/>
			<Header />

			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="destination" element={<Destination />} />
				<Route path="crew" element={<Crew  />} />
				<Route path="technology" element={<Technology />} />
			</Routes>
		</>
	);
}

export default App;
