import styled from "styled-components";
import { colors, nav } from "../../shared/styled-components/Shared.styled";

export const DestinationContainer = styled.div`
    margin: 1em 4em;
    @media screen and (min-width: 1024px) {
        margin: 0 8em;
    }
`

export const DestinationContentContainer = styled.div`
    margin: 2em 0;

    @media screen and (min-width:1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5em;
    }
`;

export const PlanetImage = styled.img`
    display: block;
    margin: auto;
    width: 50%;

    @media screen and (min-width: 768px) {
        width: 40%;
    }

    @media screen and (min-width: 1024px) {
        max-width: 500px;
    }
`;

export const DestinationDetailsContainer = styled.div`
    text-align: center;

    @media screen and (min-width: 768px) {
        width: 60vw;
        margin: auto;
    }

    @media screen and (min-width: 1024px) {
        text-align: left;
        max-width: 500px;
    }
`; 

export const DestinationOptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65vw;
    max-width: 300px;
    margin: auto;

    input {
        display: none;
    }

    @media screen and (min-width: 768px) {
        margin: 2em auto; 
    }

    @media screen and (min-width: 1024px) {
        margin: 1em 0;
    }
`;

export const DestinationStatsContainer = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    @media screen and (min-width:1024px) {
        justify-content: flex-start;
        gap: 4em;
    }
`;

export const Divider = styled.hr`
    border: 0.5px solid ${colors.darkGrey};
    margin: 2em 0;
`;

export const LabelText = styled.label`
    ${nav};
    margin: 1.5em 0;
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
