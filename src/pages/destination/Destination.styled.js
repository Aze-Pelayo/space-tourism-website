import styled from "styled-components";
import { colors, nav } from "../../shared/styled-components/Shared.styled";

export const DestinationContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-template-areas:
        "Heading5"
        "PlanetImage"
        "DestinationOptionsContainer"
        "DestinationTextContainer"
        "SubheadingDistance"
        "SubheadingTime";
    gap: 1.5em 0;
    justify-items: center;
    padding: 1em 2em;

    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "Heading5 Heading5"
            "PlanetImage PlanetImage"
            "DestinationOptionsContainer DestinationOptionsContainer"
            "DestinationTextContainer DestinationTextContainer"
            "SubheadingDistance SubheadingTime";
        gap: 2em 8em;
        padding: 1em 4em;
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-areas:
            "Heading5 Heading5 Heading5 Heading5"
            "PlanetImage PlanetImage DestinationOptionsContainer DestinationOptionsContainer"
            "PlanetImage PlanetImage DestinationTextContainer DestinationTextContainer"
            "PlanetImage PlanetImage SubheadingDistance SubheadingTime";
        gap: 2em;
        padding: 1em 8em;
        justify-items: start;
    }
`;

export const PlanetImage = styled.img`
    grid-area: PlanetImage;
    width: 80%;

    @media screen and (min-width: 768px) {
        width: 50%;
        padding-bottom: 1em;
    }

    @media screen and (min-width: 1024px) {
        justify-self: center;
        align-self: center;
        width: 70%;
    }
`;

export const DestinationOptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: DestinationOptionsContainer;
    width: 60%;

    input {
        display: none;
    }

    @media screen and (min-width: 768px) {
        width: 40%;
    }

    @media screen and (min-width: 1024px) {
        width: 60%;
        max-width: 350px;
    }
`;

export const Divider = styled.hr`
    border: 0.5px solid ${colors.darkGrey};
    margin-top: 2em;
    width: 100%;
`;

export const LabelText = styled.label`
    ${nav};
    padding-bottom: 0.5em;
    border-bottom: 2px solid rgba(100, 100, 100, 0);

    ${({ htmlFor, selected }) => {
        if (htmlFor === selected) {
            return `
                color: ${colors.white};
                border-bottom: 2px solid ${colors.white};
                
            `;
        } else {
            return `color: ${colors.lavender}`;
        }
    }}
`;

export const DestinationTextContainer = styled.div`
    grid-area: DestinationTextContainer;
    text-align: center;

    @media screen and (min-width: 768px) {
        width: 80%;
    }

    @media screen and (min-width: 1024px) {
        text-align: left;
        width: 90%;
    }
`;

export const SubheadingDistance = styled.div`
    grid-area: SubheadingDistance;
    text-align: center;

    @media screen and (min-width: 768px) {
        justify-self: end;
    }

    @media screen and (min-width: 1024px) {
        justify-self: start;
        text-align: left;
    }
`;
export const SubheadingTime = styled.div`
    grid-area: SubheadingTime;
    text-align: center;

    @media screen and (min-width: 768px) {
        justify-self: start;
        text-align: left;
    }
`;
