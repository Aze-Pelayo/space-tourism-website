import styled from "styled-components";

export const CrewContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-template-areas:
        "Heading5"
        "CrewImage"
        "CrewRadioButtons"
        "CrewDetails";
    gap: 2em 0;
    justify-items: center;
    padding: 0 1em;

    @media screen and (min-width: 768px) {
        grid-template-areas:
        "Heading5"
        "CrewDetails"
        "CrewRadioButtons"
        "CrewImage";
        padding: 0 4em;
        gap: 1em 0;
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
        "Heading5 CrewImage"
        "CrewDetails CrewImage"
        "CrewRadioButtons CrewImage";
        height: 84.5vh;
        justify-items: start;
        align-items: start;
        padding:0 0 0 10vw;
        gap: 1em 2em;
    }
`

export const CrewRadioButtons = styled.div`
    grid-area: CrewRadioButtons;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;

    @media screen and (min-width: 768px) {
        width: 20%;
    };

    @media screen and (min-width: 1024px) {
        align-self: end;
        padding-bottom: 3em;
    };
`

export const CrewImage = styled.img`
    grid-area: CrewImage;
    width: auto;
    border-bottom: 0.5px solid rgba(100,100,100, 0.5);
    padding: 0 2.5em;
    height: 250px;

    @media screen and (min-width: 768px) {
        position: absolute;
        bottom: 0;
        height: calc(100% - 555px);
        border: none;
    };

    @media screen and (min-width: 1024px) {
        position: static;
        align-self: end;
        height: 85%;
    }
`

export const CrewDetails = styled.div`
    grid-area: CrewDetails;
    text-align: center;

    @media screen and (min-width: 768px) {
        width: 80%;
    }

    @media screen and (min-width: 1024px) {
        text-align: left;
        
        p {
            width: 70%;
        }
    }
`;