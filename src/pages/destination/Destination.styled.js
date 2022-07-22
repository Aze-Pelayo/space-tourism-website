import styled from "styled-components";
import { colors, nav } from "../../shared/styled-components/Shared.styled";

export const DestinationContainer = styled.div`
    padding: 1em 2em;
`;

export const PlanetImage = styled.img`
    display: block;
    margin: auto;
    width: 50%;

    @media screen and (min-width: 769px) {
        width: 40%;
    }
`;

export const DestinationDetailsContainer = styled.div`
    text-align: center;
`;

export const DestinationOptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65vw;
    margin: auto;

    input {
        display: none;
    }
`;

export const DestinationStatsContainer = styled.div`
    @media screen and (min-width: 769px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
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
