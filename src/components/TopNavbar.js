import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaTwitter, FaDiscord, FaBars, FaTimes } from "react-icons/fa";
import ChimpLogo from "../assets/chimplogo.webp"; // Ensure this path is correct

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Wrapper style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner>
          {/* Left: Services Link */}
          <LeftSide isHidden={y > 100}>
            <ServicesLink
              href="https://services.fluxinc.io/"
              target="_blank"
              rel="noopener noreferrer"
              isHidden={y > 100}
            >
              Services
            </ServicesLink>
          </LeftSide>

          {/* Center: Chimp Logo */}
          <ChimpLogoWrapper isHidden={y > 100}>
            <a href="https://fluxinc.io" target="_blank" rel="noopener noreferrer">
              <ChimpLogoImg src={ChimpLogo} alt="Chimp Logo" />
            </a>
          </ChimpLogoWrapper>

          {/* Right: Menu Button - Only display when menu is closed */}
          {!menuOpen && (
            <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
              <FaBars size={24} />
            </MenuButton>
          )}
        </NavInner>

        {/* Overlay Menu */}
        {menuOpen && (
          <Overlay>
            <OverlayContent>
              <CloseButton onClick={closeMenu} aria-label="Close menu">
                <FaTimes size={32} />
              </CloseButton>
              <MenuItem href="https://services.fluxinc.io/">Services</MenuItem>
              <MenuItem href="https://flux.ttcc.app/">Whitepaper</MenuItem>
              <MenuItem href="https://www.fluxinc.io/portal">Adventures</MenuItem>
              <MenuItem href="https://www.fluxinc.io/factory">Factory</MenuItem>
              <MenuItem href="https://www.fluxinc.io/tailor">Trait Tailor</MenuItem>
              <MenuItem href="https://www.fluxinc.io/shop">Shop</MenuItem>
              <MenuItem href="https://www.fluxinc.io/gm">GM Generator</MenuItem>
              <MenuItem href="https://www.fluxinc.io/team">Team</MenuItem>
              <SocialIcons>
                <SocialIconLink
                  href="https://twitter.com/fluxinc_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={20} />
                </SocialIconLink>
                <SocialIconLink
                  href="https://discord.gg/2eFxyCRU6g"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord size={20} />
                </SocialIconLink>
              </SocialIcons>
            </OverlayContent>
          </Overlay>
        )}
      </Wrapper>
    </>
  );
}

// Styled Components for Navbar and Overlay

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: height 0.3s ease, background-color 0.3s ease;
  background-color: transparent;
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftSide = styled.div`
  display: ${({ isHidden }) => (isHidden ? "none" : "flex")};
  align-items: center;
  position: absolute;
  left: 20px;
  z-index: 10002;
`;

const ServicesLink = styled.a`
  font-size: 2rem;
  font-family: "Bebas Neue", Arial, sans-serif;
  color: #ffffff;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.5rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;
  padding-top: 40px;
  padding-left: 40px;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
    color: #6adffb;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
    padding-top: 10px;
    padding-left: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ChimpLogoWrapper = styled.div`
  display: ${({ isHidden }) => (isHidden ? "none" : "flex")};
  z-index: 10002;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

const ChimpLogoImg = styled.img`
  width: 75px;
  height: 75px;
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

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  z-index: 10001;
`;

// Overlay Styles
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 32px;
  cursor: pointer;
`;

const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding-top: 20px;
`;

const MenuItem = styled.a`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
    color: #6adffb;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  gap: 20px;
  margin-top: 20px;
`;

const SocialIconLink = styled.a`
  color: #ffffff;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #64d9fb;
  }
`;

