import React, { useState, useEffect } from "react";
import data from "../../shared/json/data.json";
import { Heading5, Heading4, Heading3, BodyText } from "../../shared/styled-components/Shared.styled";
import { CrewContainer, CrewRadioButtons, CrewImage, CrewDetails, RadioInput } from "./Crew.styled";

function Crew() {
    const [selectedOption, setSelectedOption] = useState("Douglas Hurley");
    const [crew, setCrew] = useState(data.crew[0]);

    const handleSelectedOption = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleCrew = (selectedOption) => {
        setCrew(() => {
            return data.crew.find((item) => item.name === selectedOption);
        });
    };

    useEffect(() => {
        handleCrew(selectedOption);
    }, [selectedOption]);

    return (
        <CrewContainer>
            <Heading5>
                <span>02</span>Meet Your Crew
            </Heading5>

            <CrewImage src={crew.images.png} alt={crew.name} />

            <CrewDetails>
                <Heading4>{crew.role}</Heading4>
                <Heading3>{selectedOption}</Heading3>
                <BodyText>{crew.bio}</BodyText>
            </CrewDetails>

            <CrewRadioButtons>
                {data.crew.map((item, key) => {
                    return (
                        <div key={key}>
                            <RadioInput
                                type='radio'
                                value={item.name}
                                checked={selectedOption === item.name}
                                onChange={handleSelectedOption}
                                id={item.name}
                            />
                        </div>
                    );
                })}
            </CrewRadioButtons>
        </CrewContainer>
    );
}

export default Crew;
