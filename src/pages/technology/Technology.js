import React, { useState, useEffect } from "react";
import data from "../../shared/json/data.json";
import { Heading5, Subheading3, Heading3, BodyText } from "../../shared/styled-components/Shared.styled";
import {
    TechnologyContainer,
    TechnologyImage,
    TechnologyRadioButtons,
    TechnologyDetails,
    LabelText,
} from "./Technology.styled";

function Technology() {
    const checkWindowSize = () => {
        return window.innerHeight > window.innerWidth ? "portrait" : "landscape";
    };

    const [selectedOption, setSelectedOption] = useState("Launch vehicle");
    const [technology, setTechnology] = useState(data.technology[0]);
    const [screenOrientation, setScreenOrientation] = useState(checkWindowSize());

    const handleSelectedOption = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleTechnology = (selectedOption) => {
        setTechnology(() => {
            return data.technology.find((item) => item.name === selectedOption);
        });
    };

    useEffect(() => {
        handleTechnology(selectedOption);
    }, [selectedOption]);

    useEffect(() => {
        const handleScreenResize = () => {
            setScreenOrientation(checkWindowSize());
        };
        window.addEventListener("resize", handleScreenResize);
        return () => window.removeEventListener("resize", handleScreenResize);
    }, []);
    return (
        <TechnologyContainer>
            <Heading5>
                <span>03</span>Space Launch 101
            </Heading5>

            {screenOrientation === "portrait" ? (
                <TechnologyImage src={technology.images.landscape} alt={technology.name} />
            ) : (
                <TechnologyImage src={technology.images.portrait} alt={technology.name} />
            )}

            <TechnologyRadioButtons>
                {data.technology.map((item, key) => {
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
                                {key + 1}
                            </LabelText>
                        </div>
                    );
                })}
            </TechnologyRadioButtons>

            <TechnologyDetails>
                <Subheading3>The Technology...</Subheading3>
                <Heading3>{selectedOption}</Heading3>
                <BodyText>{technology.description}</BodyText>
            </TechnologyDetails>
        </TechnologyContainer>
    );
}

export default Technology;
