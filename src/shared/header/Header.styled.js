import styled from "styled-components";
import { colors, nav } from "../styled-components/Shared.styled";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em;

    @media screen and (min-width: 768px) {
        margin: 0 0 0 2em;
        padding-right: 0;
    }
`;

export const LogoContainer = styled.div`
    background: url("../../img/shared/logo.svg") center center/cover;
    height: 2em;
    width: 2em;
    z-index: 3;
    padding: 0.2em;

    @media screen and (min-width: 768px) {
        height: 3em;
        width: 3em;
    }
`;

export const BurgerContainer = styled.button`
    background: ${({ open }) =>
        !open
            ? "url('../../img/shared/icon-hamburger.svg') center center/cover;"
            : "url('../../img/shared/icon-close.svg') center center/cover;"};
    height: 1.75em;
    width: 1.75em;
    z-index: 4;
    padding: 0.2em;
    cursor: pointer;
    outline: none;
    border: none;
    position: relative;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const LinkContainer = styled.div`
    position: fixed;
    right: ${({ open }) => (!open ? "-70vw" : "0vw")};
    top: 0;
    padding: 4em 3em;
    height: 100vh;
    width: 70vw;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.04);
    margin: 0;
    -webkit-transition: right 0.6s ease;
    -moz-transition: right 0.6s ease;
    -ms-transition: right 0.6s ease;
    -o-transition: right 0.6s ease;
    transition: right 0.6s ease;
    backdrop-filter: blur(81.5485px);

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: static;
        right: 0;
        height: 6em;
        padding: 0 8vw;
        width: 60vw;
    }
`;

export const NavText = styled(NavLink)`
    ${nav};
    color: ${colors.white};
    margin: 2em 0;
    @media screen and (min-width: 768px) {
        margin: 0;
        padding: 2.3em 0;
        border-bottom: 5px solid rgba(100, 100, 100, 0);
        span {
            display: none;
        }

        &:hover,
        &:focus {
            border-bottom-color: rgba(100, 100, 100, 0.5);
        }

        &.active {
            border-bottom: 5px solid ${colors.white};
        }
    }

    @media screen and (min-width: 1024px) {
        span {
            display: inline;
        }
    }
`;