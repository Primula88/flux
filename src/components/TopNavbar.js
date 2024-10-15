import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaTwitter, FaDiscord } from "react-icons/fa"; // Import Twitter and Discord icons
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
            {/* Social Media Icons */}
            <li className="semiBold font15 pointer">
              <SocialIconLink href="https://x.com/FluxInc_" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </SocialIconLink>
            </li>
            <li className="semiBold font15 pointer">
              <SocialIconLink href="https://discord.gg/adRHkNwWf9" target="_blank" rel="noopener noreferrer">
                <FaDiscord size={20} />
              </SocialIconLink>
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
            {/* Mobile Social Media Icons Side by Side */}
            <li className="social-icons">
              <SocialIconLink href="https://x.com/FluxInc_" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                <FaTwitter size={20} />
              </SocialIconLink>
              <SocialIconLink href="https://discord.gg/adRHkNwWf9" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                <FaDiscord size={20} />
              </SocialIconLink>
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
  top: 30px; /* Position below the navbar */
  right: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  list-style: none;
  padding: 10px 0;
  width: 160px; /* Reduced width for more compact mobile menu */

  li {
    padding: 10px 20px;

    &.social-icons {
    }
  }

  @media (min-width: 760px) {
    display: none; /* Hide the mobile menu on desktop */
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  padding: 10px 15px;
  font-size: 0.9rem;
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

// Styled Link for Social Media Icons
const SocialIconLink = styled.a`
  color: #ffffff;
  transition: color 0.3s ease;
  cursor: pointer;
  padding: 0 5px; /* Adjust padding for better spacing */

  &:hover {
    color: #64d9fb;
  }
`;


