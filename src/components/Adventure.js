import React from 'react';
import { Typography, Card, CardContent, Grid, useMediaQuery } from '@mui/material';
import styled from 'styled-components';
import { FaDiscord } from 'react-icons/fa';
import adventurePic from '../assets/adventure.webp'; // Import the image

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

// Styled Image for Adventure
const AdventureImage = styled.img`
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

function Adventure() {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '20px', boxShadow: 'none' }}>
      <CardContent>
        <Grid container spacing={3}>
          {!isDesktop ? (
            <>
              {/* Mobile view: Keep the layout as it was before */}
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                  Adventure Platform
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                  A highly engaging, chance-based platform that allows you to send your NFTs on Adventures. These are fully customizable missions with set time periods and multiple reward possibilities.
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                  This platform helps projects provide fun and engagement within their communities, while rewarding holders and creating a strong revenue stream for the project.
                </Typography>
              </Grid>

              {/* The rest of the content for mobile (as before) */}
              <Grid container spacing={3} sx={{ mt: 4 }}>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>How Does it Work?</Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    Prizes, Adventure length, Maximum number of adventurers, and cost are set by the team. Holders can select their NFT, confirm the transaction, and send it on an adventure.
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    You can send up to 18 NFTs at a time on PC and 9 at a time on Mobile.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>For Projects:</Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    - Increased engagement in Discord <br />
                    - Custom Adventure UI <br />
                    - Strong revenue stream <br />
                    - Burn project token <br />
                    - 100% ROI in under 3 months
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>For Holders:</Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    - Earn amazing rewards <br />
                    - Support your project <br />
                    - Fun and engaging experiences <br />
                    - Brag about your adventure in Discord
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={3} sx={{ mt: 4 }}>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>What Else Can the Platform Do?</Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    The platform can also be used for Idle Games, gamified raffles, and many other experiences.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={3} sx={{ mt: 4 }}>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>Get the Platform for Your Project</Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    The Adventure Platform is available for white-label solutions with various payment plans. Join our Discord to open an adventure ticket and learn more.
                  </Typography>

                  <StyledButton href="https://discord.com/invite/fluxinc" target="_blank" rel="noopener noreferrer">
                    <FaDiscord style={{ marginRight: '10px' }} /> Join Discord
                  </StyledButton>
                </Grid>
              </Grid>
            </>
          ) : (
            // Desktop view: Split into two columns
            <>
              {/* Left Section: Basic/Most Important Information */}
              <Grid item xs={4} sx={{ textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: '2rem' }}>
                  Adventure Platform
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: '1.2rem' }}>
                  A highly engaging platform to send your NFTs on Adventures.
                </Typography>
                <StyledButton href="https://discord.com/invite/fluxinc" target="_blank" rel="noopener noreferrer">
                  <FaDiscord style={{ marginRight: '10px' }} /> Join Discord
                </StyledButton>

                {/* Desktop-only Adventure Image */}
                <AdventureImage src={adventurePic} alt="Adventure" />
              </Grid>

              {/* Right Section: Scrollable Content */}
              <Grid item xs={8}>
                <RightSection>
                  <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    How Does it Work?
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    Prizes, Adventure length, Maximum number of adventurers, and cost are set by the team. Holders can select their NFT, confirm the transaction, and send it on an adventure.
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    You can send up to 18 NFTs at a time on PC and 9 at a time on Mobile.
                  </Typography>

                  <Typography variant="h6" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    For Projects:
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    - Increased engagement in Discord <br />
                    - Custom Adventure UI <br />
                    - Strong revenue stream <br />
                    - Burn project token <br />
                    - 100% ROI in under 3 months
                  </Typography>

                  <Typography variant="h6" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    For Holders:
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    - Earn amazing rewards <br />
                    - Support your project <br />
                    - Fun and engaging experiences <br />
                    - Brag about your adventure in Discord
                  </Typography>

                  <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    What Else Can the Platform Do?
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                    The platform can also be used for Idle Games, gamified raffles, and many other experiences.
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

export default Adventure;

