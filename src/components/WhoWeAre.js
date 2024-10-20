import React, { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardContent, useMediaQuery } from '@mui/material';
import styled from 'styled-components';
import ChimpLogo from '../assets/chimplogo.webp'; // Import the logo
import TensorIcon from '../assets/tensor.webp'; // Import Tensor icon
import MEIcon from '../assets/ME.webp'; // Import Magic Eden icon

// Import all the .webp images
import Image1 from '../assets/sidescroll/1-1.webp';
import Image2 from '../assets/sidescroll/1-2.webp';
import Image4 from '../assets/sidescroll/1-4.webp';
import Image6 from '../assets/sidescroll/1-6.webp';
import Image7 from '../assets/sidescroll/1-7.webp';
import Image8 from '../assets/sidescroll/1-8.webp';
import Image9 from '../assets/sidescroll/1.webp';
import Image10 from '../assets/sidescroll/2.webp';
import Image11 from '../assets/sidescroll/3.webp';
import Image12 from '../assets/sidescroll/4.webp';
import Image13 from '../assets/sidescroll/7.webp';

// List of images
const images = [
  Image1, Image2, Image4, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13,
];

// Utility function to shuffle the images randomly
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

// Styled Sidescroller Container
const SidescrollerWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  margin-bottom: 40px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }
`;

const Sidescroller = styled.div`
  display: flex;
  width: 200%;
  animation: scroll 40s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  img {
    height: 250px;
    flex-shrink: 0;
    width: auto;
  }
`;

// TextWrapper with white border on both sides, hidden on mobile
const TextWrapper = styled.div`
  max-width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;

  @media (max-width: 960px) {
    max-width: 100%;
    flex-direction: column;
    border-left: none; /* Hide border on mobile */
    border-right: none; /* Hide border on mobile */
  }
`;

// Logo Wrapper for the image, hidden on mobile
const LogoWrapper = styled.div`
  flex: 0 0 25%; /* Takes up 25% of the space */
  display: flex;
  justify-content: center;
  
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 960px) {
    display: none; /* Hide logo on mobile */
  }
`;

// Content Wrapper for the title and text
const ContentWrapper = styled.div`
  flex: 0 0 75%; /* Takes up 75% of the space */
  
  @media (max-width: 960px) {
    flex: 0 0 auto;
    text-align: center;
  }
`;

// Styled Title with custom colors
const StyledTitle = styled.h2`
    font-family: 'AkiraExpanded';
  font-size: 1.4rem;
  color: white;
  letter-spacing: 0.02em;
  margin-bottom: 20px;

  span.teal {
    color: #83d6f7; /* Teal color for "WE ARE THE" */
  }

  @media (max-width: 960px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

// Wrapper for "View our PFP Collections" text and icons
const TextAndIconsWrapper = styled.div`
  display: flex;
  color: #A9A9A9; /* Greyish color for the text */
  gap: 10px; /* Space between text and icons */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 960px) {
    flex-direction: column; /* Icons move below text on mobile */
    align-items: center;
    gap: 10px;
  }
`;

// Icon Wrapper for displaying Tensor and Magic Eden icons
const IconWrapper = styled.div`
  display: flex;
  gap: 10px; /* Space between icons */
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1); /* Slight zoom effect */
    }
  }

  img {
    width: 22px; /* Set icon size */
    height: 22px;
    filter: brightness(0) saturate(100%) invert(71%) sepia(31%) saturate(750%) hue-rotate(149deg) brightness(101%) contrast(100%); /* Teal color filter */
  }
`;

function WhoWeAre() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(shuffleArray([...images]));
  }, []);

  return (
    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardContent>
        {/* Sidescroller for Desktop */}
        {isDesktop && (
          <SidescrollerWrapper>
            <Sidescroller>
              {shuffledImages.map((image, index) => (
                <img key={index} src={image} alt={`Artwork ${index + 1}`} />
              ))}
              {shuffledImages.map((image, index) => (
                <img key={`${index}-loop`} src={image} alt={`Artwork Loop ${index + 1}`} />
              ))}
            </Sidescroller>
          </SidescrollerWrapper>
        )}

        {/* Content with Logo and Text */}
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <TextWrapper>
              {/* Left: Logo (Hidden on mobile) */}
              <LogoWrapper>
                <img src={ChimpLogo} alt="Chimp Logo" />
              </LogoWrapper>

              {/* Right: Title and Text */}
              <ContentWrapper>
                <StyledTitle>
                  <span className="teal">WE ARE THE</span> PRESENT, <span className="teal">WE ARE THE</span> FUTURE
                </StyledTitle>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    fontFamily: 'Bebas Neue, Arial, sans-serif',
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    color: '#fff',
                  }}
                >
                  Flux Inc. is the umbrella under which we house various development ventures as well as our PFP projects, the Time Traveling Chimps and the Portal Beasts. Our goal is to offer professionally developed tools for all projects throughout Solana. This page will give you a glimpse of the products and services we offer and are currently developing to show you some of the ways we are changing how the Solana Eco System interacts.
                </Typography>
                {/* View our PFP Collections with icons */}
                <TextAndIconsWrapper>
  <Typography
    variant="body1"
    gutterBottom
    sx={{
      fontFamily: 'Apple Symbols, Arial, sans-serif', // Using Apple Symbols
      fontSize: '1rem',
      color: '#A9A9A9', /* Greyish color for the text */
      lineHeight: '1.8',
      textAlign: 'center', // Center-align the text
    }}
  >
    VIEW OUR PFP COLLECTIONS:
  </Typography>

                  {/* Icons for Tensor and Magic Eden */}
                  <IconWrapper     
      sx={{
      justifyContent: 'center', // Center the icons
    }}>
                    <a href="https://magiceden.io/creators/fluxinc" target="_blank" rel="noopener noreferrer">
                      <img src={MEIcon} alt="Magic Eden Icon" />
                    </a>
                    <a href="https://www.tensor.trade/trade/ttc" target="_blank" rel="noopener noreferrer">
                      <img src={TensorIcon} alt="Tensor Icon" />
                    </a>
                  </IconWrapper>
                </TextAndIconsWrapper>

              </ContentWrapper>
            </TextWrapper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default WhoWeAre;

