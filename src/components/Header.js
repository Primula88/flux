import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaDiscord } from 'react-icons/fa'; // Discord icon
import { FaTwitter } from 'react-icons/fa'; // X (Twitter) icon
import { Link } from 'react-scroll'; // Importing react-scroll's Link

// Assets
import AkiraFont from '../assets/font/AkiraExpandedDemo.otf'; // Custom font

const totalTriangles = 30; // Reduced the number of triangles
const animationTime = 30; // Slow down animation further for more subtle effect

const generateTriangles = () => {
  let styles = '';

  for (let i = 1; i <= totalTriangles; i++) {
    const size = Math.random() * 10 + 3; // Further reduced triangle size
    const rotate = Math.random() * 360;
    const opacity = 0.3; // Reduced opacity for more subtle triangles

    styles += `
      .tri:nth-child(${i}) {
        border-top: ${size}px solid hsla(${Math.random() * 360}, 100%, 50%, ${opacity});
        border-right: ${size}px solid transparent;
        border-left: ${size}px solid transparent;
        margin-left: -${size / 2}px;
        margin-top: -${size / 2}px;
        filter: grayscale(1);
        transform: rotate(${rotate}deg) translate3d(0, 0, -1500px) scale(0);
        animation: anim${i} ${animationTime * 2}s infinite linear; /* Slow down the animation */
        animation-delay: ${-(animationTime / totalTriangles) * i}s;
        opacity: 0;
      }
      
      @keyframes anim${i} {
        0% {
          opacity: 0.1; /* Low opacity for subtle effect */
          transform: rotate(${rotate * 1.5}deg) translate3d(${Math.random() * 400}px, ${Math.random() * 400}px, 500px) scale(1); /* Reduced movement range */
        }
        100% {
          opacity: 0; /* Fade out */
          transform: rotate(${rotate * 2}deg) translate3d(${Math.random() * 400}px, ${Math.random() * 400}px, 1000px) scale(0); /* Reduced ending range */
        }
      }
    `;
  }

  return styles;
};

const Header = () => {
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = generateTriangles();
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <Wrapper id="home">
      <TrianglesWrapper>
        {Array.from({ length: totalTriangles }).map((_, index) => (
          <div key={index} className="tri" />
        ))}
      </TrianglesWrapper>

      <ContentWrapper>
        <HeaderText>TOOLS BUILT FOR SOLANA COMMUNITIES</HeaderText>
        <ButtonWrapper>
          <StyledButton href="https://x.com/FluxInc_" target="_blank" rel="noopener noreferrer">
            <FaTwitter style={{ marginRight: '10px' }} /> Follow
          </StyledButton>
          <StyledButton href="https://discord.gg/2eFxyCRU6g" target="_blank" rel="noopener noreferrer">
            <FaDiscord style={{ marginRight: '10px' }} /> Join
          </StyledButton>
        </ButtonWrapper>
        {/* Using react-scroll's Link component */}
        <ScrollDown to="services" smooth={true} duration={500}>
          Learn More ↓
        </ScrollDown>
      </ContentWrapper>
    </Wrapper>
  );
};

// Styled Components

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh; /* Fullscreen height */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  overflow: hidden; /* Hide overflow for the triangles */

  /* Import custom font */
  @font-face {
    font-family: 'AkiraExpanded';
    src: url(${AkiraFont}) format('opentype');
  }
`;

const TrianglesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1; /* Ensure content is on top of triangles */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.h1`
  font-family: 'AkiraExpanded';
  font-size: 48px;
  font-weight: 900;
  letter-spacing: 0.1em;
  max-width: 900px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px; /* Space between the buttons */
  margin-bottom: 20px;
`;

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  border: 2px solid #00bcd4; /* Border with color */
  border-radius: 50px; /* Large border-radius for round buttons */
  color: #00bcd4;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #00bcd4;
    color: #121212;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 8px 20px;
  }
`;

const ScrollDown = styled(Link)`
  margin-top: 20px;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #00bcd4;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export default Header;

