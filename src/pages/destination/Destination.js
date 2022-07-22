import React, { useState, useEffect } from "react";
import data from "../../shared/json/data.json";
import { Heading5, Heading2, BodyText, Subheading1, Subheading2 } from "../../shared/styled-components/Shared.styled";
import {
    LabelText,
    PlanetImage,
    DestinationContainer,
    DestinationTextContainer,
    SubheadingDistance,
    SubheadingTime,
    DestinationOptionsContainer,
    Divider,
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
        <DestinationContainer>
            <Heading5>
                <span>01</span>Pick Your Destination
            </Heading5>

            <PlanetImage src={destination.images.webp} alt={destination.name} />

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

                            <LabelText htmlFor={item.name} selected={selectedOption}>
                                {item.name}
                            </LabelText>
                        </div>
                    );
                })}
            </DestinationOptionsContainer>

            <DestinationTextContainer>
                <Heading2>{selectedOption}</Heading2>
                <BodyText>{destination.description}</BodyText>
                <Divider />
            </DestinationTextContainer>

            <SubheadingDistance>
                <Subheading2>Avg. Distance</Subheading2>
                <Subheading1>{destination.distance}</Subheading1>
            </SubheadingDistance>

            <SubheadingTime>
                <Subheading2>Est. Travel Time</Subheading2>
                <Subheading1>{destination.travel}</Subheading1>
            </SubheadingTime>
        </DestinationContainer>
    );
}

export default Destination;
