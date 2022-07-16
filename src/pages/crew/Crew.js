import React, {useState, useEffect} from "react";
import data from "../../shared/json/data.json";

function Crew() {
    const [selectedOption, setSelectedOption] = useState("Douglas Hurley");
    const [crew, setCrew] = useState(data.crew[0]);

    const handleSelectedOption = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleCrew = (selectedOption) => {
        setCrew(() => {
            return data.crew.find((item) => item.name === selectedOption);
        })
    };

    useEffect(() => {
        handleCrew(selectedOption);
    }, [selectedOption]);

    return (
        <>
			<h5>
				<span>02</span>Meet Your Crew
			</h5>

			<div>
				{data.crew.map((item, key) => {
					return (
						<div key={key}>
							<input
								type="radio"
								value={item.name}
								checked={selectedOption === item.name}
								onChange={handleSelectedOption}
								id={item.name}
							/>
						</div>
					);
				})}
			</div>

			<div>
                <img src = {crew.images.png} alt ={crew.name}/>
                <h5>{crew.role}</h5>
				<h1>{selectedOption}</h1> 
				<p>{crew.bio}</p>

			</div>
		</>
    )
}

export default Crew;