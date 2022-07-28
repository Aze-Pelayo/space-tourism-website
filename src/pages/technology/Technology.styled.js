import styled from "styled-components";
import { colors } from "../../shared/styled-components/Shared.styled";

export const TechnologyContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-template-areas:
        "Heading5"
        "TechnologyImage"
        "TechnologyRadioButtons"
        "TechnologyDetails";
    gap: 1em 0;
    justify-items: center;
    padding: 1em 0;

    @media screen and (min-width: 768px) {
        padding: 1em 4em;
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: 0.25fr 1fr 1fr;
        grid-template-areas:
            "Heading5 Heading5 Heading5"
            "TechnologyRadioButtons TechnologyDetails TechnologyImage"
            "TechnologyRadioButtons TechnologyDetails TechnologyImage"
            "TechnologyRadioButtons TechnologyDetails TechnologyImage";
        gap: 2em;
        padding: 0 0 2em 9em;
        justify-items: left;
        align-items: center;
    }
`;

export const TechnologyImage = styled.img`
    grid-area: TechnologyImage;
    width: 100%;

    @media screen and (min-width: 768px) {
        margin: 0 -4em;
        width: calc(100% + 8em);
    }

    @media screen and (min-width: 1024px) {
        justify-self: end;
        height: 100%;
        width: auto;
        margin: 0;
        padding-left: 2em;
    }
`;

export const TechnologyRadioButtons = styled.div`
    grid-area: TechnologyRadioButtons;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;
    margin: 1em 0;
    padding: 1em 0;

    @media screen and (min-width: 768px) {
        width: 45%;
        margin: 2em 0;
    }

    @media screen and (min-width: 1024px) {
        flex-flow: column;
        justify-content: space-around;
        align-items: center;
        height: 70%;
        justify-self: center;
    }

    input {
        display: none;
    }
`;

export const LabelText = styled.label`
    height: 4em;
    width: 4em;
    padding: 1em 1.5em;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid rgba(100, 100, 100, 0.25);
    font: lighter 16px "Bellefair", serif;

    &:hover {
        border: 1px solid ${colors.white};
    }

    @media screen and (min-width: 768px) {
        font-size: 24px;
    }

    @media screen and (min-width: 1024px) {
        height: 3em;
        width: 3em;
        font-size: 32px;
        padding: 0.75em 1.2em;
    }

    ${({ htmlFor, selected }) => {
        if (htmlFor === selected) {
            return `
                color: ${colors.black};
                background-color: ${colors.white}
                
            `;
        } else {
            return `
                color: ${colors.white};
                background: none;
            `;
        }
    }}
`;

export const TechnologyDetails = styled.div`
    grid-area: TechnologyDetails;
    text-align: center;
    padding: 0 2em;

    @media screen and (min-width: 768px) {
        width: 80%;
    }

    @media screen and (min-width: 1024px) {
        text-align: left;
        width: 100%;
        padding: 0;
    }
`;
