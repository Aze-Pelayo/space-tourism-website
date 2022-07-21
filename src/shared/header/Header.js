import React, { useState } from "react";
import { HeaderContainer, LogoContainer, BurgerContainer, LinkContainer } from "./Header.styled";
import { NavText } from "../styled-components/Shared.styled";

function Header() {
    const [openNav, setOpenNav] = useState(false);

    const handleOpenNav = () => {
        setOpenNav(!openNav);
    };

    let activeClassName = "active";
    return (
        <HeaderContainer>
            <LogoContainer></LogoContainer>

            <nav>
                <BurgerContainer onClick={handleOpenNav} open={openNav}></BurgerContainer>

                <LinkContainer open={openNav}>
                    <NavText to='/' className={({ isActive }) => (isActive ? activeClassName : undefined)}>
                        <span>00</span>Home
                    </NavText>

                    <NavText to='destination' className={({ isActive }) => (isActive ? activeClassName : undefined)}>
                        <span>01</span>Destination
                    </NavText>

                    <NavText to='crew' className={({ isActive }) => (isActive ? activeClassName : undefined)}>
                        <span>02</span>Crew
                    </NavText>

                    <NavText to='technology' className={({ isActive }) => (isActive ? activeClassName : undefined)}>
                        <span>04</span>Technology
                    </NavText>
                </LinkContainer>
            </nav>
        </HeaderContainer>
    );
}

export default Header;
