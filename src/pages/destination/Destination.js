import React, { useState, useEffect } from "react";
import data from "../../shared/json/data.json";
import {
    Heading5,
    Heading1,
    BodyText,
    Subheading1,
    Subheading2,
} from "../../shared/styled-components/Shared.styled";
import {
	LabelText,
    DestinationDetailsContainer,
    PlanetImage,
    DestinationContainer,
    DestinationOptionsContainer,
    DestinationStatsContainer,
	Divider
} from "./Destination.styled";

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
            <Heading5>
                <span>01</span>Pick Your Destination
            </Heading5>

            <DestinationContainer>
                <PlanetImage src={destination.images.webp} alt={destination.name} />

                <DestinationDetailsContainer>
                    <DestinationOptionsContainer>
                        {data.destinations.map((item, key) => {
                            return (
                                <div key={key}>
                                    <input
                                        type='radio'
                                        value={item.name}
                                        checked={selectedOption === item.name}
                                        onChange={handleSelectedOption}
                                        id={item.name}
                                    />

                                    <LabelText htmlFor={item.name} selected = {selectedOption}>{item.name}</LabelText>
                                </div>
                            );
                        })}
                    </DestinationOptionsContainer>

                    <Heading1>{selectedOption}</Heading1>
                    <BodyText>{destination.description}</BodyText>
                    
					<Divider />
                    
					<DestinationStatsContainer>
                        <>
                            <Subheading2>Avg. Distance</Subheading2>
                            <Subheading1>{destination.distance}</Subheading1>
                        </>
                        <>
                            <Subheading2>Est. Travel Time</Subheading2>
                            <Subheading1>{destination.travel}</Subheading1>
                        </>
                    </DestinationStatsContainer>
                </DestinationDetailsContainer>
            </DestinationContainer>
        </>
    );
}

export default Destination;
