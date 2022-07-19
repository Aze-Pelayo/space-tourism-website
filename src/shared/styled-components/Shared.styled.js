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
    font: lighter 150px "Bellefair", serif;
    color: ${colors.white};
    text-transform: uppercase;
    margin: 0;

    @media screen and (max-width:480px) {
        font-size: 80px;
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
    font: lighter 28px 'Barlow Condensed', sans-serif;
    color: ${colors.lavender};
    letter-spacing: 4.75px;
    text-transform: uppercase;

    @media screen and (max-width:480px) {
        font-size: 16px;
    }
`

export const BodyText = styled.p`
    font-size: 18px;
    font-family: 'Barlow', sans-serif;
    line-height: 32px;
    color: ${colors.lavender};

    @media screen and (max-width:480px) {
        font-size: 15px;
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
    position: absolute;
    top: 0;
    left: 0;
`