import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaTwitter, FaDiscord } from "react-icons/fa"; // Import Twitter and Discord icons
// Assets
import Logo from "../assets/logo/logo.webp"; // Ensure this path is correct

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu open/close
  const [holderMenuOpen, setHolderMenuOpen] = useState(false); // State for desktop Holder Area dropdown
  const holderRef = useRef(null); // Reference for Holder Area dropdown

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close Holder Area dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        holderRef.current &&
        !holderRef.current.contains(event.target)
      ) {
        setHolderMenuOpen(false);
      }
    };

    if (holderMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [holderMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the mobile menu
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the mobile menu when a menu item is clicked
    setHolderMenuOpen(false); // Also close the Holder Area dropdown if open
  };

  const toggleHolderMenu = () => {
    setHolderMenuOpen(!holderMenuOpen); // Toggle Holder Area dropdown on desktop
  };

  return (
    <>
      <Wrapper
        className="flexCenter animate darkBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
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
            {/* Holder Area Dropdown */}
            <HolderDropdown ref={holderRef}>
              <HolderDropdownButton onClick={toggleHolderMenu}>
                Holder Area ▾
              </HolderDropdownButton>
              {holderMenuOpen && (
                <HolderDropdownContent>
                  <DropdownLink
                    href="https://www.fluxinc.io/factory"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setHolderMenuOpen(false)}
                  >
                    Factory
                  </DropdownLink>
                  <DropdownLink
                    href="https://www.fluxinc.io/portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setHolderMenuOpen(false)}
                  >
                    Portal
                  </DropdownLink>
                  <DropdownLink
                    href="https://www.fluxinc.io/tailor"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setHolderMenuOpen(false)}
                  >
                    Tailor
                  </DropdownLink>
                  <DropdownLink
                    href="https://www.fluxinc.io/gm"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setHolderMenuOpen(false)}
                  >
                    GM Generator
                  </DropdownLink>
                  <DropdownLink
                    href="https://www.fluxinc.io/shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setHolderMenuOpen(false)}
                  >
                    Shop
                  </DropdownLink>
                </HolderDropdownContent>
              )}
            </HolderDropdown>
            {/* Social Media Icons */}
            <li className="semiBold font15 pointer">
              <SocialIconLink
                href="https://x.com/FluxInc_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} />
              </SocialIconLink>
            </li>
            <li className="semiBold font15 pointer">
              <SocialIconLink
                href="https://discord.gg/adRHkNwWf9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord size={20} />
              </SocialIconLink>
            </li>
          </UlWrapper>
          <MenuButton onClick={toggleMenu} className="mobileMenu">
            {menuOpen ? "Close" : "Menu"}
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
            {/* Holder Area Section in Mobile Menu */}
            <HolderAreaSection>
              <HolderAreaTitle>Holder Area</HolderAreaTitle>
              <Divider />
              <li>
                <DropdownLink
                  href="https://www.fluxinc.io/factory"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Factory
                </DropdownLink>
              </li>
              <li>
                <DropdownLink
                  href="https://www.fluxinc.io/portal"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Portal
                </DropdownLink>
              </li>
              <li>
                <DropdownLink
                  href="https://www.fluxinc.io/tailor"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Tailor
                </DropdownLink>
              </li>
              <li>
                <DropdownLink
                  href="https://www.fluxinc.io/gm"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  GM Generator
                </DropdownLink>
              </li>
              <li>
                <DropdownLink
                  href="https://www.fluxinc.io/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Shop
                </DropdownLink>
              </li>
            </HolderAreaSection>
            {/* Mobile Social Media Icons Side by Side */}
            <li className="social-icons">
              <SocialIconLink
                href="https://x.com/FluxInc_"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <FaTwitter size={20} />
              </SocialIconLink>
              <SocialIconLink
                href="https://discord.gg/adRHkNwWf9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
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

// Desktop Menu
const UlWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-left: 30px;
    display: flex;
    align-items: center; /* Ensures vertical alignment */
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
  top: 80px; /* Adjust based on navbar height */
  right: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  list-style: none;
  padding: 10px 0;
  width: 220px; /* Increased width to accommodate Holder Area links */

  li {
    padding: 10px 20px;
  }

  .social-icons {
    display: flex;
    justify-content: space-around;
    padding: 10px 20px;
  }

  @media (min-width: 760px) {
    display: none; /* Hide the mobile menu on desktop */
  }
`;

// Styled Link for navigation items
const StyledLink = styled(Link)`
  color: #ffffff;
  padding: 10px 15px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px;
  cursor: pointer; /* Adds pointer cursor on hover */
  letter-spacing: 0.25em; /* Adds spacing between letters */
  display: flex;
  align-items: center; /* Ensures vertical alignment */

  &:hover {
    color: #64d9fb;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    color: #64d9fb;
  }
`;

// Styled Link for social media icons
const SocialIconLink = styled.a`
  color: #ffffff;
  transition: color 0.3s ease;
  cursor: pointer;
  padding: 0 5px; /* Adjust padding for better spacing */

  &:hover {
    color: #64d9fb;
  }
`;

// Desktop Holder Area Dropdown
const HolderDropdown = styled.li`
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const HolderDropdownButton = styled.div`
  color: #fff;
  padding: 10px 15px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 0.25em;
  transition: color 0.3s ease;

  &:hover {
    color: #64d9fb;
  }
`;

const HolderDropdownContent = styled.div`
  position: absolute;
  top: 40px; /* Adjust based on dropdown button height */
  left: 0;
  background-color: #2e2e2e;
  border-radius: 8px;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;

  a {
    color: #ffffff;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #3e3e3e;
      color: #64d9fb;
    }
  }
`;

// Mobile Holder Area Section
const HolderAreaSection = styled.li`
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
`;

const HolderAreaTitle = styled.div`
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 1rem; /* Increased font size for emphasis */
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #444;
  margin: 5px 0 10px 0;
`;

// Dropdown Link (Used in both desktop and mobile)
const DropdownLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  display: block;
  padding: 8px 0;
  transition: color 0.3s ease;

  &:hover {
    color: #64d9fb;
  }
`;


