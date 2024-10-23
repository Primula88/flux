import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll'; // Importing react-scroll's Link

// Assets
import Logo from '../assets/logo/logo.webp'; // Import the logo
import AkiraFont from '../assets/font/AkiraExpandedDemo.otf'; // Custom font

const totalTriangles = 30; // Number of triangles
const animationTime = 30; // Slow down animation further for more subtle effect

const generateTriangles = () => {
  let styles = '';

  for (let i = 1; i <= totalTriangles; i++) {
    const size = Math.random() * 10 + 3;
    const rotate = Math.random() * 360;
    const opacity = 0.3;

    styles += `
      .tri:nth-child(${i}) {
        border-top: ${size}px solid hsla(${Math.random() * 360}, 100%, 50%, ${opacity});
        border-right: ${size}px solid transparent;
        border-left: ${size}px solid transparent;
        margin-left: -${size / 2}px;
        margin-top: -${size / 2}px;
        filter: grayscale(1);
        transform: rotate(${rotate}deg) translate3d(0, 0, -1500px) scale(0);
        animation: anim${i} ${animationTime * 2}s infinite linear;
        animation-delay: ${-(animationTime / totalTriangles) * i}s;
        opacity: 0;
      }
      
      @keyframes anim${i} {
        0% {
          opacity: 0.1;
          transform: rotate(${rotate * 1.5}deg) translate3d(${Math.random() * 400}px, ${Math.random() * 400}px, 500px) scale(1);
        }
        100% {
          opacity: 0;
          transform: rotate(${rotate * 2}deg) translate3d(${Math.random() * 400}px, ${Math.random() * 400}px, 1000px) scale(0);
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
        {/* Logo with hover effect and scroll behavior */}
        <LogoWrapper to="whoweare" smooth={true} duration={500}>
          <img src={Logo} alt="Logo" />
        </LogoWrapper>

        {/* Header Text under the logo */}
        <HeaderText>TOOLS BUILT FOR SOLANA COMMUNITIES</HeaderText>
      </ContentWrapper>
    </Wrapper>
  );
};

// Styled Components

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  overflow: hidden;

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
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled(Link)`
  display: inline-block;
  width: 300px;
  height: 300px;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.1); /* Grow the logo on hover */
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const HeaderText = styled.h1`
  font-family: 'AkiraExpanded';
  font-size: 36px;
  font-weight: 900;
  letter-spacing: 0.05em;
  max-width: 900px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export default Header;

