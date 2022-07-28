import styled from "styled-components";

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
        gap: 1em;
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
    }
`;

export const TechnologyRadioButtons = styled.div`
    grid-area: TechnologyRadioButtons;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    padding: 1em 0;

    @media screen and (min-width: 1024px) {
        flex-flow: column;
        justify-content: space-around;
        align-items: center;
        height: 30%;
        justify-self: center;
    }
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
