import React from 'react';
import { Typography, Card, CardContent, Grid, useMediaQuery } from '@mui/material';
import styled from 'styled-components';
import stakingPic from '../assets/staking.webp'; // Import the staking image
import { FaDiscord } from 'react-icons/fa'; // Discord icon

// Styled Button
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
    max-width: 200px;
  }
`;

// Styled Image for Staking
const StakingImage = styled.img`
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
    left: 0;
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

function Staking() {
  const isDesktop = useMediaQuery('(min-width: 960px)'); // Media query for desktop view

  return (
    <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '20px', boxShadow: 'none' }}>
      <CardContent>
        <Grid container spacing={3}>
          {!isDesktop ? (
            <>
              {/* Mobile view: Single-column layout */}
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                  Staking Platform
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                  Offer a unique staking experience for your holders. Gamify traits by adding staking boosters for designated traits and reward with up to 3 different tokens.
                </Typography>
                <StyledButton href="https://discord.com/invite/fluxinc" target="_blank" rel="noopener noreferrer">
                  <FaDiscord style={{ marginRight: '10px' }} /> Join Discord
                </StyledButton>
              </Grid>

              {/* Mobile view: Staking image */}
              <Grid item xs={12}>
                <StakingImage src={stakingPic} alt="Staking" />
              </Grid>

              {/* Mobile view: Scrollable Content */}
              <Grid item xs={12}>
                <RightSection>
                  <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    How Does it Work?
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    You simply fill out a form with the needed information, and we set up your staking for you. We provide a dashboard that gives you full control, allowing adjustments and offering support for any questions.
                  </Typography>

                  <Typography variant="h6" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    For Projects:
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    - Setup up to 3 different collections <br />
                    - Reward holders with up to 3 different tokens <br />
                    - Setup a custom UI <br />
                    - Set stake/unstake and claim fees to help provide revenue
                  </Typography>

                  <Typography variant="h6" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    For Holders:
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    - Stake multiple NFTs with the Stake All button <br />
                    - Earn up to 3 different tokens <br />
                    - Quickly download NFT images
                  </Typography>

                  <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    Admin Dashboard Preview
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    The dashboard allows you to control every aspect of staking, including setting rewards, collections, and fees. It offers a visual preview of all staked assets and their statuses.
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
                  Staking Platform
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: '1.2rem' }}>
                  Offer a unique staking experience for your holders. Gamify traits by adding staking boosters for designated traits and reward with up to 3 different tokens.
                </Typography>
                <StyledButton href="https://discord.com/invite/fluxinc" target="_blank" rel="noopener noreferrer">
                  <FaDiscord style={{ marginRight: '10px' }} /> Join Discord
                </StyledButton>

                {/* Desktop-only Staking Image */}
                <StakingImage src={stakingPic} alt="Staking" />
              </Grid>

              {/* Right Section: Scrollable Content */}
              <Grid item xs={8}>
                <RightSection>
                  <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    How Does it Work?
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    You simply fill out a form with the needed information, and we set up your staking for you. We provide a dashboard that gives you full control, allowing adjustments and offering support for any questions.
                  </Typography>

                  <Typography variant="h6" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    For Projects:
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    - Setup up to 3 different collections <br />
                    - Reward holders with up to 3 different tokens <br />
                    - Setup a custom UI <br />
                    - Set stake/unstake and claim fees to help provide revenue
                  </Typography>

                  <Typography variant="h6" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    For Holders:
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    - Stake multiple NFTs with the Stake All button <br />
                    - Earn up to 3 different tokens <br />
                    - Quickly download NFT images
                  </Typography>

                  <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    Admin Dashboard Preview
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    The dashboard allows you to control every aspect of staking, including setting rewards, collections, and fees. It offers a visual preview of all staked assets and their statuses.
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

export default Staking;

