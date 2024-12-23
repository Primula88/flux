import React from 'react';
import { Grid, Typography, Card, CardContent, useMediaQuery } from '@mui/material';
import styled from 'styled-components';
import TensorIcon from '../assets/tensor.webp'; // Import Tensor icon
import MEIcon from '../assets/ME.webp'; // Import Magic Eden icon
import TransparentSeparator from '../assets/transparent_seperator.webp'; // Import separator image

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

const SeparatorImage = styled.img`
  margin: 0 auto; /* Center the image */  
width: 100%;
  height: auto;
`;

// TextWrapper without the logo
const TextWrapper = styled.div`
  max-width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 0;

  @media (max-width: 960px) {
    max-width: 100%;
    padding: 20px 0;
  }
`;

// Content Wrapper for the title and text
const ContentWrapper = styled.div`
  flex: 0 0 auto;
`;

// Styled Title with custom colors
const StyledTitle = styled.h2`
  font-family: 'AkiraExpanded';
  font-size: 1.75rem;
  color: white;
  letter-spacing: 0.02em;
  margin-bottom: 20px;

  span.teal {
    color: #6cdffb; /* Teal color for "WE ARE THE" */
  }

  @media (max-width: 960px) {
    font-size: 1.5rem;
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
  margin-top: 20px;
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
    width: auto; /* Set icon size */
    height: 22px;
    filter: brightness(0) saturate(100%) invert(71%) sepia(31%) saturate(750%) hue-rotate(149deg) brightness(101%) contrast(100%); /* Teal color filter */
  }

  .tensor-icon {
    transform: scale(1.5); /* Increase Tensor icon size by 1.5x */
  }
`;

function WhoWeAre() {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardContent>
        {/* Static Separator Image for Desktop */}
        {isDesktop && (
          <SidescrollerWrapper>
            <SeparatorImage src={TransparentSeparator} alt="Separator" />
          </SidescrollerWrapper>
        )}

        {/* Content without the logo */}
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <TextWrapper>
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
                      fontFamily: 'Apple Symbols, Arial, sans-serif',
                      fontSize: '1rem',
                      color: '#A9A9A9',
                      lineHeight: '1.8',
                      textAlign: 'center',
                    }}
                  >
                    VIEW OUR PFP COLLECTIONS:
                  </Typography>
                  <IconWrapper>
                    <a href="https://magiceden.io/creators/fluxinc" target="_blank" rel="noopener noreferrer">
                      <img src={MEIcon} alt="Magic Eden Icon" />
                    </a>
                    <a href="https://www.tensor.trade/trade/ttc" target="_blank" rel="noopener noreferrer">
                      <img src={TensorIcon} alt="Tensor Icon" className="tensor-icon" />
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

