import styled from "styled-components";
import { Link } from "react-router-dom";
import {Container, colors} from "../../shared/styled-components/Shared.styled"

export const HomeContainer = styled(Container)`
    @media screen and (max-width: 480px) {
        padding: 1em;
        background: url('../../img/home/background-home-mobile.jpg') no-repeat center center/cover;
        text-align: center;
    };

    ${'' /* background-image:  url(${({ orientation }) => 

    }); */}
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
`