import styled, { css } from "styled-components";

// Colors
export const colors = {
    black: "#0B0D17",
    white: "#FFFFFF",
    lavender: "#D0D6F9",
    shadow: "rgba(151,151,151, 0.5)",
    darkGrey: "#383B4B",
};

// Text
export const Heading1 = styled.h1`
    display: inline-block;
    font: lighter 80px "Bellefair", serif;
    color: ${colors.white};
    text-transform: uppercase;
    margin: 0;

    @media screen and (min-width: 1024px) {
        font-size: 150px;
    }
`;

export const Heading2 = styled.h2`
    font: lighter 56px "Bellefair", serif;
    color: ${colors.white};
    text-transform: uppercase;
    margin: 0;

    @media screen and (min-width: 768px) {
        font-size: 80px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 100px;
    }
`;

export const Heading3 = styled.h3`
    font: lighter 24px "Bellefair", serif;
    color: ${colors.white};
    text-transform: uppercase;
    margin: 0;

    @media screen and (min-width: 768px) {
        font-size: 40px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 56px;
    }
`;

export const Heading4 = styled.h4`
    font: lighter 16px "Bellefair", serif;
    color: ${colors.white};
    opacity: 0.5;
    text-transform: uppercase;
    margin-top: 0;

    @media screen and (min-width: 768px) {
        font-size: 24px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 32px;
    }
`;

export const Heading5 = styled.h5`
    font: lighter 16px "Barlow Condensed", sans-serif;
    color: ${colors.white};
    letter-spacing: 4.75px;
    text-transform: uppercase;
    text-align: center;
    grid-area: Heading5;

    span {
        margin-right: 1em;
        font-weight: 700;
        opacity: 0.4;
    }

    @media screen and (min-width: 768px) {
        justify-self: start;
        font-size: 20px;
    }

    @media screen and (min-width: 1024px) {
        text-align: left;
        font-size: 28px;
    }
`;

export const BodyText = styled.p`
    font-size: 15px;
    font-family: "Barlow", sans-serif;
    line-height: 25px;
    color: ${colors.lavender};
    grid-area: BodyText;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 28px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 18px;
        line-height: 32px;
    }
`;

export const Subheading1 = styled.p`
    font-size: 28px;
    font-family: "Bellefair", serif;
    color: ${colors.white};
    text-transform: uppercase;
    margin: 0.5em 0;
`;

export const Subheading2 = styled.p`
    font-size: 14px;
    font-family: "Barlow Condensed", sans-serif;
    color: ${colors.lavender};
    letter-spacing: 2.35px;
    text-transform: uppercase;
`;

export const Subheading3 = styled.p`
    font-size: 14px;
    font-family: "Barlow Condensed", sans-serif;
    color: ${colors.lavender};
    letter-spacing: 2.35px;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
`;

export const nav = css`
    display: block;
    font-size: 16px;
    font-family: "Barlow Condensed", sans-serif;
    letter-spacing: 2.67px;
    text-decoration: none;
    text-transform: uppercase;

    span {
        margin-right: 1em;
        font-weight: 700;
    }
`;

// Containers
export const Container = styled.div`
    height: 100%;
    width: 100%;
`;

export const TextContainer = styled.div`
    @media screen and (min-width: 768px) {
        width: 500px;
        margin: auto;
    }

    @media screen and (min-width: 1024px) {
        margin: 0;
    }
`;
