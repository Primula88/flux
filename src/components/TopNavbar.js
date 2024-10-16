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
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false); // State for desktop About dropdown
  const holderRef = useRef(null); // Reference for Holder Area dropdown
  const aboutRef = useRef(null); // Reference for About dropdown

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        holderRef.current &&
        !holderRef.current.contains(event.target) &&
        aboutRef.current &&
        !aboutRef.current.contains(event.target)
      ) {
        setHolderMenuOpen(false);
        setAboutMenuOpen(false);
      }
    };

    if (holderMenuOpen || aboutMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [holderMenuOpen, aboutMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the mobile menu
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the mobile menu when a menu item is clicked
    setHolderMenuOpen(false); // Also close the Holder Area dropdown if open
    setAboutMenuOpen(false); // Also close the About dropdown if open
  };

  const toggleHolderMenu = () => {
    setHolderMenuOpen(!holderMenuOpen); // Toggle Holder Area dropdown on desktop
    setAboutMenuOpen(false); // Close About dropdown if open
  };

  const toggleAboutMenu = () => {
    setAboutMenuOpen(!aboutMenuOpen); // Toggle About dropdown on desktop
    setHolderMenuOpen(false); // Close Holder Area dropdown if open
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
              <NavLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            {/* About Dropdown */}
            <HolderDropdown ref={aboutRef}>
              <HolderDropdownButton
                onClick={toggleAboutMenu}
                aria-haspopup="true"
                aria-expanded={aboutMenuOpen}
              >
                About ▾
              </HolderDropdownButton>
              {aboutMenuOpen && (
                <HolderDropdownContent>
                  <NavLink
                    to="whoweare"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    onClick={closeMenu}
                  >
                    Who We Are
                  </NavLink>
                  <NavLink
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    onClick={closeMenu}
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="FAQ"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    onClick={closeMenu}
                  >
                    FAQ
                  </NavLink>
                </HolderDropdownContent>
              )}
            </HolderDropdown>
            {/* Holder Area Dropdown */}
            <HolderDropdown ref={holderRef}>
              <HolderDropdownButton
                onClick={toggleHolderMenu}
                aria-haspopup="true"
                aria-expanded={holderMenuOpen}
              >
                Holder Area ▾
              </HolderDropdownButton>
              {holderMenuOpen && (
                <HolderDropdownContent>
                  <NavExternalLink
                    href="https://www.fluxinc.io/factory"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    Factory
                  </NavExternalLink>
                  <NavExternalLink
                    href="https://www.fluxinc.io/portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    Portal
                  </NavExternalLink>
                  <NavExternalLink
                    href="https://www.fluxinc.io/tailor"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    Tailor
                  </NavExternalLink>
                  <NavExternalLink
                    href="https://www.fluxinc.io/gm"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    GM Generator
                  </NavExternalLink>
                  <NavExternalLink
                    href="https://www.fluxinc.io/shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    Shop
                  </NavExternalLink>
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
              <NavLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            {/* About Section in Mobile Menu */}
            <HolderAreaSection>
              <HolderAreaTitle>About</HolderAreaTitle>
              <Divider />
              <li>
                <NavLink
                  to="whoweare"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onClick={closeMenu}
                >
                  Who We Are
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onClick={closeMenu}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="FAQ"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onClick={closeMenu}
                >
                  FAQ
                </NavLink>
              </li>
            </HolderAreaSection>
            {/* Holder Area Section in Mobile Menu */}
            <HolderAreaSection>
              <HolderAreaTitle>Holder Area</HolderAreaTitle>
              <Divider />
              <li>
                <NavExternalLink
                  href="https://www.fluxinc.io/factory"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Factory
                </NavExternalLink>
              </li>
              <li>
                <NavExternalLink
                  href="https://www.fluxinc.io/portal"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Portal
                </NavExternalLink>
              </li>
              <li>
                <NavExternalLink
                  href="https://www.fluxinc.io/tailor"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Tailor
                </NavExternalLink>
              </li>
              <li>
                <NavExternalLink
                  href="https://www.fluxinc.io/gm"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  GM Generator
                </NavExternalLink>
              </li>
              <li>
                <NavExternalLink
                  href="https://www.fluxinc.io/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Shop
                </NavExternalLink>
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
  top: 40px; /* Adjust based on navbar height */
  right: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  list-style: none;
  padding: 10px 0;
  width: 220px; /* Increased width to accommodate Holder Area links */

  li {
    /* Removed padding to allow individual padding in links */
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

// Styled Link for all navigation items
const NavLink = styled(Link)`
  color: #ffffff;
  padding: 4px 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-family: 'Bebas Neue', Arial, sans-serif; /* Unified font */
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #64d9fb;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    color: #64d9fb;
  }

  @media (max-width: 760px) {
    display: block;
    padding: 8px 16px; /* Increased padding for better touch targets on mobile */
  }
`;

// Styled External Link for Holder Area and Mobile Menu
const NavExternalLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  display: block;
  padding: 8px 16px; /* Unified padding */
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-family: 'Bebas Neue', Arial, sans-serif; /* Unified font */
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #64d9fb;
    background-color: #3e3e3e;
  }

  @media (max-width: 760px) {
    padding: 6px 16px; /* Adjusted padding for mobile */
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

// Adjusted HolderDropdownButton for vertical alignment
const HolderDropdownButton = styled.div`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 0.25em;
  transition: color 0.3s ease;
  display: flex; /* Added flex */
  align-items: center; /* Center vertically */

  &:hover {
    color: #64d9fb;
  }
`;

// Dropdown content for Holder Area and About
const HolderDropdownContent = styled.div`
  position: absolute;
  top: 40px; /* Adjust based on dropdown button height */
  left: 0;
  background-color: #2e2e2e;
  border-radius: 8px;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  flex-direction: column; /* Stack links vertically */

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

// Mobile Holder Area Section and About Section
const HolderAreaSection = styled.li`
  width: 100%;
  box-sizing: border-box;
`;

// Enhanced Holder Area Title for Mobile
const HolderAreaTitle = styled.div`
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 1.2rem; /* Increased font size for emphasis */
  text-align: left; /* Align text to left */
  padding: 10px; /* Add padding */
`;

// Divider for Mobile Holder Area Section
const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #444;
  margin: 5px 0 10px 0;
`;

