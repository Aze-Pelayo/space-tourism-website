import styled from "styled-components";
import { Link } from "react-router-dom";
import {Container, colors} from "../../shared/styled-components/Shared.styled"

export const HomeContainer = styled(Container)`
    padding: 1em;
    text-align: center;

    @media screen and (min-width: 501px) {

    };

    @media screen and (min-width: 1024px) {
        display: flex;
        text-align: left;
    };
`

export const LandingMainButton = styled(Link)`
    font: lighter 20px "Bellefair", serif;
    color: ${colors.black};
    background: ${colors.white};
    border-radius: 50%;
    padding: 3em 1.5em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translateX(-50%);

    &:hover, &:focus, &:active {
        box-shadow: 0 0 0 1.5em ${colors.shadow};
        transition: 0.2s
    }

    @media screen and (min-width: 501px) {
        font-size: 32px;
    }

    @media screen and (min-width:1024px) {
        ${'' /* position: relative; */}
    }
`