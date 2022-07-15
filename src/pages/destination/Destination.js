import React, { useState, useEffect } from "react";
import data from "../../shared/json/data.json";

function Destination() {
	const [selectedOption, setSelectedOption] = useState("Moon");
	const [destination, setDestination] = useState(data.destinations[0]);

	const handleSelectedOption = (event) => {
		setSelectedOption(event.target.value);
	};

	const handleDestination = (selectedOption) => {
		setDestination(() => {
			return data.destinations.find((item) => item.name === selectedOption);
		});
	};

	useEffect(() => {
		handleDestination(selectedOption);
	}, [selectedOption]);

	return (
		<>
			<h5>
				<span>01</span>Pick Your Destination
			</h5>

			<div>
				{data.destinations.map((item, key) => {
					return (
						<div key={key}>
							<input
								type="radio"
								value={item.name}
								checked={selectedOption === item.name}
								onChange={handleSelectedOption}
								id={item.name}
							/>

							<label htmlFor={item.name}>{item.name}</label>
						</div>
					);
				})}
			</div>

			<div>
                <img src = {destination.images.png} alt ={destination.name}/>
				<h1>{selectedOption}</h1> 
				<p>{destination.description}</p>
				<div>
					<div>
						<h5>Avg. Distance</h5>
						<h4>{destination.distance}</h4>
					</div>
					<div>
						<h5>Est. Travel Time</h5>
						<h4>{destination.travel}</h4>
					</div>
				</div>
			</div>
		</>
	);
}

export default Destination;
