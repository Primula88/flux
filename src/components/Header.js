import React from 'react';
import styled from 'styled-components';
import { FaDiscord, FaTwitter } from 'react-icons/fa'; // Icons for Discord and Twitter
import { BsArrowDown } from 'react-icons/bs'; // Arrow Down icon
import { Link as ScrollLink } from 'react-scroll'; // Scroll link for smooth scrolling

// Assets
import AkiraFont from '../assets/font/Akira Expanded Demo.otf'; // Custom font

export default function Header() {
  return (
    <Wrapper id="home">
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

        {/* Learn More Button */}
        <LearnMoreWrapper>
          <ScrollLink
            to="services" // The ID of the target element in Services.js
            smooth={true}
            duration={800} // Duration for smooth scrolling
          >
            <LearnMoreButton>
              Learn More <BsArrowDown style={{ marginLeft: '10px' }} />
            </LearnMoreButton>
          </ScrollLink>
        </LearnMoreWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.section`
  width: 100%;
  height: 100vh; /* Fullscreen height */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;

  /* Import custom font */
  @font-face {
    font-family: 'AkiraExpanded';
    src: url(${AkiraFont}) format('opentype');
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.h1`
  font-family: 'AkiraExpanded', sans-serif;
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

const LearnMoreWrapper = styled.div`
  margin-top: 40px;
  display: none;

  @media (min-width: 768px) {
    display: block; /* Show Learn More only on desktop */
  }
`;

const LearnMoreButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    color: #ff9800;
  }
`;

