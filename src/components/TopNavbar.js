import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaTwitter, FaDiscord, FaBars, FaTimes } from "react-icons/fa"; // Import necessary icons
// Assets
import ChimpLogo from "../assets/chimplogo.webp"; // Ensure this path is correct

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false); // State for menu open/close
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
    setMenuOpen(!menuOpen); // Toggle the dropdown menu
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the dropdown menu when a menu item is clicked
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
          {/* Left: Services Link */}
          <LeftSide>
            <ServicesLink to="home" spy={true} smooth={true} offset={-80}>
              Services
            </ServicesLink>
          </LeftSide>

          {/* Center: Chimp Logo */}
          <ChimpLogoWrapper hide={y > 100}>
            <ChimpLogoImg src={ChimpLogo} alt="Chimp Logo" />
          </ChimpLogoWrapper>

          {/* Right: Menu Button */}
          <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </MenuButton>
        </NavInner>

        {/* Dropdown Menu */}
        {menuOpen && (
          <DropdownMenu>
            <MenuLinks>
              <li>
                <NavLink
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
              <DropdownItem ref={aboutRef}>
                <DropdownButton
                  onClick={toggleAboutMenu}
                  aria-haspopup="true"
                  aria-expanded={aboutMenuOpen}
                >
                  About ▾
                </DropdownButton>
                {aboutMenuOpen && (
                  <DropdownContent>
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
                  </DropdownContent>
                )}
              </DropdownItem>
              {/* Holder Area Dropdown */}
              <DropdownItem ref={holderRef}>
                <DropdownButton
                  onClick={toggleHolderMenu}
                  aria-haspopup="true"
                  aria-expanded={holderMenuOpen}
                >
                  Holder Area ▾
                </DropdownButton>
                {holderMenuOpen && (
                  <DropdownContent>
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
                  </DropdownContent>
                )}
              </DropdownItem>
            </MenuLinks>
            {/* Social Media Icons */}
            <SocialIcons>
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
            </SocialIcons>
          </DropdownMenu>
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
  background-color: transparent; /* Change as needed */
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center; /* Space between left and right */
  align-items: center;
  padding: 0 20px;
`;

// Left Side: Services Link
const LeftSide = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 20px; /* Position it to the left */
`;

// Services Link
const ServicesLink = styled(Link)`
  font-size: 2.5rem;
  font-family: "Bebas Neue", Arial, sans-serif;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;
  letter-spacing: 0.5rem;
  margin-right: 20px; /* Space between Services and potentially other elements */

  &:hover {
    color: #64d9fb;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

// Center: Chimp Logo
const ChimpLogoWrapper = styled.div`
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  transition: opacity 0.3s ease;
  pointer-events: ${({ hide }) => (hide ? "none" : "auto")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  @media (max-width: 768px) {
  padding-top: 20px;  
}   
`;

const ChimpLogoImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

// Menu Button
const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;

  /* Position it to the right */
  position: absolute;
  right: 20px;

  @media (min-width: 761px) {
    /* Optional: Adjust size or color for desktop */
  }
`;

// Dropdown Menu
const DropdownMenu = styled.div`
  position: absolute;
  top: 80px; /* Adjust based on navbar height */
  right: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  width: 140px; /* Adjust width as needed */
  padding: 10px 0;
  z-index: 1000; /* Ensure it appears above other elements */
  display: flex;
  flex-direction: column;
`;

// Menu Links Container
const MenuLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Dropdown Item for About and Holder Area
const DropdownItem = styled.li`
  position: relative;
`;

// Dropdown Button
const DropdownButton = styled.div`
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2e2e2e;
    color: #64d9fb;
  }
`;

// Dropdown Content
const DropdownContent = styled.div`
  background-color: #2e2e2e;
  border-radius: 8px;
  margin-top: 5px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

// Social Media Icons Container
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-top: 1px solid #444;
  margin-top: 10px;
`;

// Styled Link for all navigation items
const NavLink = styled(Link)`
  color: #ffffff;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: 'Bebas Neue', Arial, sans-serif;
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px;
  cursor: pointer;
  display: block;

  &:hover {
    color: #64d9fb;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    color: #64d9fb;
  }
`;

// Styled External Link for Holder Area and Mobile Menu
const NavExternalLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  display: block;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: 'Bebas Neue', Arial, sans-serif;
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #64d9fb;
    background-color: #3e3e3e;
  }
`;

// Styled Link for social media icons
const SocialIconLink = styled.a`
  color: #ffffff;
  transition: color 0.3s ease;
  cursor: pointer;
  padding: 0 10px;

  &:hover {
    color: #64d9fb;
  }
`;

