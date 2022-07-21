import styled from "styled-components";
import { Link } from "react-router-dom";
import {Container, colors} from "../../shared/styled-components/Shared.styled"

export const HomeContainer = styled(Container)`
    padding: 1em;
    margin: 2em 0;
    text-align: center;

    @media screen and (min-width: 769px) {
        margin: 4em 0;
    };

    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        text-align: left;
        margin: 0;
        padding: 0 5em;
        position: absolute;
        bottom: 10%;
        height: 50vh;
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
    bottom: 7%;
    transform: translateX(-50%);

    &:hover, &:focus, &:active {
        box-shadow: 0 0 0 1.5em ${colors.shadow};
        transition: 0.2s
    }

    @media screen and (min-width: 769px) {
        font-size: 32px;
    }

    @media screen and (min-width:1024px) {
        position: static;
        margin-bottom: 1em;
    }
`