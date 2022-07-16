import React, {useState, useEffect} from "react";
import data from "../../shared/json/data.json";

function Technology() {
    const checkWindowSize = () => {
        return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    }

    const [selectedOption, setSelectedOption] = useState("Launch vehicle");
    const [technology, setTechnology] = useState(data.technology[0]);
    const [screenOrientation, setScreenOrientation] = useState(checkWindowSize())

    const handleSelectedOption = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleTechnology = (selectedOption) => {
        setTechnology(() => {
            return data.technology.find((item) => item.name === selectedOption);
        })
    };



    useEffect(() => {
        handleTechnology(selectedOption);
    }, [selectedOption]);

    useEffect(() => {
        const handleScreenResize = () => {
            setScreenOrientation(checkWindowSize())
        }
        window.addEventListener('resize', handleScreenResize);
        return () => window.removeEventListener('resize', handleScreenResize)
    },[])
    return (
        <>
			<h5>
				<span>03</span>Space Launch 101
			</h5>

			<div>
				{data.technology.map((item, key) => {
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
                {screenOrientation === 'portrait' ?
                    <img src = {technology.images.portrait} alt ={technology.name}/> :
                    <img src = {technology.images.landscape} alt ={technology.name}/>
                }
                <h5>The Technology...</h5>
				<h1>{selectedOption}</h1> 
				<p>{technology.description}</p>

			</div>
		</>
    )
}

export default Technology;