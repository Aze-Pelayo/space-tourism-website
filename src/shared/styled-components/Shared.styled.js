import styled from "styled-components";

// Colors
export const colors = {
    black:"#0B0D17",
    white:"#FFFFFF",
    lavender:"#D0D6F9",
    shadow: "rgba(151,151,151, 0.5)"
};

// Text
export const Heading1 = styled.h1`
    display: inline-block;
    font: lighter 80px "Bellefair", serif;
    color: ${colors.white};
    text-transform: uppercase;
    margin: 0;

    @media screen and (min-width:501px) {
        font-size: 150px;
    }
`

export const Heading2 = styled.h2`
    font: lighter 100px "Bellefair", serif;
    color: ${colors.white};
    text-transform: uppercase;

`

export const Heading3 = styled.h3`
    font: lighter 56px "Bellefair", serif;
    color: ${colors.white};
    text-transform: uppercase;
`

export const Heading4 = styled.h4`
    font: lighter 32px "Bellefair", serif;
    color: ${colors.white};
    text-transform: uppercase;
`

export const Heading5 = styled.h5`
    font: lighter 16px 'Barlow Condensed', sans-serif;
    color: ${colors.lavender};
    letter-spacing: 4.75px;
    text-transform: uppercase;

    @media screen and (min-width:501px) {
        font-size: 20px;
    }

    @media screen and (min-width:1024px) {
        font-size: 28px;
    }
`

export const BodyText = styled.p`
    font-size: 15px;
    font-family: 'Barlow', sans-serif;
    line-height: 25px;
    color: ${colors.lavender};

    @media screen and (min-width:501px) {
        font-size: 16px;
        line-height: 28px;
    }

    @media screen and (min-width:1024px) {
        font-size: 18px;
        line-height: 32px;
    }
`;

export const Subheading1 = styled.p`
    font-size: 28px;
    font-family: 'Bellefair', serif;
    color: ${colors.white};
`

export const Subheading2 = styled.p`
    font-size: 14px;
    font-family: 'Barlow Condensed', sans-serif;
    color: ${colors.white};
    letter-spacing: 2.35px;
`

export const NavText = styled.li`
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;
    color: ${colors.white};
    letter-spacing: 2.67px;
`

// Containers
export const Container = styled.div`
    height: 100%;
    width: 100%;
`

export const TextContainer = styled.div`
    @media screen and (min-width: 501px) {
        width: 500px;
        margin: auto;
    }
`