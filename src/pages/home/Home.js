import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heading1, Heading5, BodyText } from "../../shared/styled-components/Shared.styled";
import { HomeContainer, LandingMainButton } from "./Home.styled";

function Home() {
	const checkWindowSize = () => {
		return window.innerHeight > window.innerWidth ? "portrait" : "landscape";
	};
	const [screenOrientation, setScreenOrientation] = useState(checkWindowSize());

	useEffect(() => {
		const handleScreenResize = () => {
			setScreenOrientation(checkWindowSize());
		};
		window.addEventListener("resize", handleScreenResize);
		return () => window.removeEventListener("resize", handleScreenResize);
	}, []);

	return (
		<HomeContainer orientation={screenOrientation}>
			<div>
				<Heading5>So you want to travel to</Heading5>
				<Heading1>Space</Heading1>
				<BodyText>
					Let’s face it; if you want to go to space, you might as well genuinely go to
					outer space and not hover kind of on the edge of it. Well sit back, and relax
					because we’ll give you a truly out of this world experience!
				</BodyText>
			</div>

			<LandingMainButton to = 'destination'>Explore</LandingMainButton>
		</HomeContainer>
	);
}

export default Home;
