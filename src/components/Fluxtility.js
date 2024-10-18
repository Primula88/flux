import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import styled from 'styled-components';
import fluxtilityPic from '../assets/fluxtility.webp'; // Import the Fluxtility image
import { FaDiscord } from 'react-icons/fa';  // Discord icon

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

// Styled Image for Fluxtility
const FluxtilityImage = styled.img`
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

function Fluxtility() {
  return (
    <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '20px', boxShadow: 'none' }}>
      <CardContent>
        <Grid container spacing={3}>
          {/* Left Section: Basic/Most Important Information */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}> {/* Ensure xs={12} for mobile */}
            <Typography variant="h3" gutterBottom sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: '2rem' }}>
              Fluxtility Platform
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: '1.2rem' }}>
              Fluxtility is an advanced semi-automated suite of Discord programs and services integrated into one game-changing platform for community managers.
            </Typography>
            <StyledButton href="https://discord.com/invite/fluxinc" target="_blank" rel="noopener noreferrer">
              <FaDiscord style={{ marginRight: '10px' }} /> Join Discord
            </StyledButton>

            {/* Desktop-only Fluxtility Image */}
            <FluxtilityImage src={fluxtilityPic} alt="Fluxtility" />
          </Grid>

          {/* Right Section: Scrollable Content */}
          <Grid item xs={12} md={8}> {/* Ensure xs={12} for mobile */}
            <RightSection>
              <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                Core Features
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                - Raid-to-Earn with an auto-reward system and participation verification. <br />
                - On-chain NFT raffles and giveaways directly in Discord. <br />
                - Real-time wallet balance tracker for Solana and SPL tokens. <br />
                - Full admin dashboard for easy project management.
              </Typography>

              <Typography variant="h6" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                For Community Managers:
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                - Manage raids, giveaways, and raffles seamlessly. <br />
                - Track participation and performance through real-time leaderboards. <br />
                - Automatically distribute rewards without manual interaction.
              </Typography>

              <Typography variant="h6" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                For Participants:
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                - Participate in raids, earn rewards, and join raffles directly in Discord. <br />
                - Access real-time wallet balance and collection performance. <br />
                - Earn rewards in supported SPL tokens, including Jelly, Whey, and more.
              </Typography>

              <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                Get Started with Fluxtility
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
                Ready to streamline your community management and offer advanced tools for your members? Get started today by joining our Discord!
              </Typography>
            </RightSection>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Fluxtility;

