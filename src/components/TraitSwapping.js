import React from 'react';
import { Typography, Card, CardContent, Grid, useMediaQuery } from '@mui/material';
import styled from 'styled-components';
import { FaDiscord } from 'react-icons/fa';
import traitSwapImage from '../assets/traits.webp'; // Example image for Trait Swapping

// Styled Button (same style as used in Adventure)
const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  border: 2px solid #83d6f7;
  border-radius: 50px;
  color: #83d6f7;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  max-width: 300px;
  margin: 0 auto;

  &:hover {
    background-color: #83d6f7;
    color: #121212;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 8px 20px;
  }
`;

// Styled Image for Trait Swapping
const TraitImage = styled.img`
  width: 40%;
  max-width: 300px;
  margin-top: 20px;
  border-radius: 10px;
`;

// Styled component for the right section with the scrollbar on the left
const RightSection = styled.div`
  overflow-y: auto;
  max-height: 400px;
  padding: 20px;
  position: relative;
  text-align: left;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    position: absolute;
    left: 0; /* Moves the scrollbar to the left */
  }

  &::-webkit-scrollbar-track {
    background: #2e2e2e;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #83d6f7;
    border-radius: 10px;
    border: 2px solid #1e1e1e;
  }

  @media (max-width: 960px) {
    overflow: visible;
    max-height: none;
  }
`;

function TraitSwapping() {
  const isDesktop = useMediaQuery('(min-width: 960px)'); // Media query to detect desktop view

  return (
    <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '20px', boxShadow: 'none' }}>
      <CardContent>
        <Grid container spacing={3}>
          {!isDesktop ? (
            <>
              {/* Mobile view: 1 column layout */}
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                  Trait Swapping Platform
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                  Update the look of your NFTs with new traits you release.
                </Typography>
                <StyledButton href="https://discord.com/invite/fluxinc" target="_blank" rel="noopener noreferrer">
                  <FaDiscord style={{ marginRight: '10px' }} /> Join Discord
                </StyledButton>
              </Grid>

              <Grid item xs={12}>
                <TraitImage src={traitSwapImage} alt="Trait Swapping" />
              </Grid>

              {/* Right Section: Scrollable Content for mobile */}
              <Grid item xs={12}>
                <RightSection>
                  <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    How Does it Work?
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    Holders visit the trait swapping platform, select their NFT, and choose from the traits provided. They are charged a Sol fee and a token fee for each applied trait or removal.
                  </Typography>

                  <Typography variant="h6" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    For Projects:
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    - Customize NFTs <br />
                    - Setup a custom UI <br />
                    - Another revenue stream <br />
                    - Mint and manage traits
                  </Typography>

                  <Typography variant="h6" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    For Holders:
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    - Customize your NFTs <br />
                    - Burn tokens earned from staking <br />
                    - Create unique NFT pieces
                  </Typography>

                  <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    Get the Platform for Your Project
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    The Trait Swapping Platform is available for white-label solutions. Join our Discord to get started!
                  </Typography>
                </RightSection>
              </Grid>
            </>
          ) : (
            // Desktop view: Split into two columns
            <>
              {/* Left Section: Basic/Most Important Information */}
              <Grid item xs={4} sx={{ textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: '2rem' }}>
                  Trait Swapping Platform
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: '1.2rem' }}>
                  Update the look of your NFTs with new traits you release.
                </Typography>
                <StyledButton href="https://discord.com/invite/fluxinc" target="_blank" rel="noopener noreferrer">
                  <FaDiscord style={{ marginRight: '10px' }} /> Join Discord
                </StyledButton>

                {/* Desktop-only Trait Swapping Image */}
                <TraitImage src={traitSwapImage} alt="Trait Swapping" />
              </Grid>

              {/* Right Section: Scrollable Content */}
              <Grid item xs={8}>
                <RightSection>
                  <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    How Does it Work?
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    Holders visit the trait swapping platform, select their NFT, and choose from the traits provided. They are charged a Sol fee and a token fee for each applied trait or removal.
                  </Typography>

                  <Typography variant="h6" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    For Projects:
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    - Customize NFTs <br />
                    - Setup a custom UI <br />
                    - Another revenue stream <br />
                    - Mint and manage traits
                  </Typography>

                  <Typography variant="h6" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    For Holders:
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    - Customize your NFTs <br />
                    - Burn tokens earned from staking <br />
                    - Create unique NFT pieces
                  </Typography>

                  <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    Get the Platform for Your Project
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    The Trait Swapping Platform is available for white-label solutions. Join our Discord to get started!
                  </Typography>
                </RightSection>
              </Grid>
            </>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default TraitSwapping;

