import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import Logo from "../assets/logo/logo.webp"; // Ensure this path is correct

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu open/close

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [y]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the mobile menu
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the mobile menu when a menu item is clicked
  };

  return (
    <>
      <Wrapper className="flexCenter animate darkBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceBetween">
          <LogoLink className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoTitleWrapper>
              <LogoImg src={Logo} alt="Flux Inc. Logo" />
              <Title className="font20 extraBold whiteColor">Flux Inc.</Title>
            </LogoTitleWrapper>
          </LogoLink>
          <UlWrapper className="flexNullCenter desktopMenu">
            <li className="semiBold font15 pointer">
              <StyledLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </StyledLink>
            </li>
            <li className="semiBold font15 pointer">
              <StyledLink
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Services
              </StyledLink>
            </li>
            <li className="semiBold font15 pointer">
              <StyledLink
                activeClass="active"
                to="socials"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Socials
              </StyledLink>
            </li>
          </UlWrapper>
          <MenuButton onClick={toggleMenu} className="mobileMenu">
            Menu
          </MenuButton>
        </NavInner>
        {menuOpen && (
          <MobileMenuWrapper>
            <li>
              <StyledLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                onClick={closeMenu}
              >
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
                onClick={closeMenu}
              >
                Services
              </StyledLink>
            </li>
            <li>
              <StyledLink
                activeClass="active"
                to="socials"
                spy={true}
                smooth={true}
                offset={-80}
                onClick={closeMenu}
              >
                Socials
              </StyledLink>
            </li>
          </MobileMenuWrapper>
        )}
      </Wrapper>
    </>
  );
}

// Styled Components for Navbar
const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: height 0.3s ease, background-color 0.3s ease;
  background-color: #1e1e1e;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

// Wrapper to hold the logo and title next to each other
const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 40px;
  width: auto;
  margin-right: 10px;
  @media (max-width: 760px) {
    height: 30px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0.25em; // Adds spacing between letters

`;

// Link that wraps the logo and title
const LogoLink = styled(Link)`
  cursor: pointer; /* Adds pointer cursor on hover */
  display: flex;
  align-items: center;
`;

const UlWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-left: 30px;
  }

  @media (max-width: 760px) {
    display: none; /* Hide the desktop menu on mobile */
  }
`;

// Button for mobile menu
const MenuButton = styled.button`
  display: none;
  font-size: 16px;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 760px) {
    display: block; /* Show the menu button on mobile */
  }
`;

// Mobile dropdown menu
const MobileMenuWrapper = styled.ul`
  position: absolute;
  top: 60px; /* Position below the navbar */
  right: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  list-style: none;
  padding: 10px 0;
  width: 200px;

  li {
    padding: 10px 20px;
    text-align: right;
  }

  @media (min-width: 760px) {
    display: none; /* Hide the mobile menu on desktop */
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px;
  cursor: pointer; /* Adds pointer cursor on hover */
  letter-spacing: 0.25em; // Adds spacing between letters


  &:hover {
    color: #64d9fb;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    color: #64d9fb;
  }
`;


