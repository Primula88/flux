import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import styled from 'styled-components';  // Use styled-components for button styling
import { FaDiscord } from 'react-icons/fa';  // Discord icon

// Styled Button (reusing the button style)
const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  border: 2px solid #00bcd4;
  border-radius: 50px;
  color: #00bcd4;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  max-width: 300px; /* Limit the button width */
  margin: 0 auto; /* Center align the button */
  
  &:hover {
    background-color: #00bcd4;
    color: #121212;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 8px 20px;
    max-width: 200px; /* Adjust button width for smaller screens */
  }
`;

function Fluxtility() {
  return (
    <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '20px' }}>
      <CardContent>
        <Grid container spacing={3} justifyContent="center">
          {/* Make this grid item take full width and center its content */}
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ color: '#00bcd4', fontFamily: 'inherit' }}>
              Fluxtility Platform
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontFamily: 'inherit' }}>
              Fluxtility is an advanced semi-automated suite of Discord programs and services integrated into one game-changing platform for community managers.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontFamily: 'inherit' }}>
              With tools ranging from an auto-reward raid system to on-chain giveaways, Fluxtility is designed to make your community management easier and more engaging.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: '#ff9800', fontFamily: 'inherit' }}>Core Features</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'inherit' }}>
              - Raid-to-Earn with an auto-reward system and participation verification. <br />
              - On-chain NFT raffles and giveaways directly in Discord. <br />
              - Real-time wallet balance tracker for Solana and SPL tokens. <br />
              - Full admin dashboard for easy project management.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ color: '#ff9800', fontFamily: 'inherit' }}>For Community Managers:</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'inherit' }}>
              - Manage raids, giveaways, and raffles seamlessly. <br />
              - Track participation and performance through real-time leaderboards. <br />
              - Automatically distribute rewards without manual interaction.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ color: '#ff9800', fontFamily: 'inherit' }}>For Participants:</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'inherit' }}>
              - Participate in raids, earn rewards, and join raffles directly in Discord. <br />
              - Access real-time wallet balance and collection performance. <br />
              - Earn rewards in supported SPL tokens, including Jelly, Whey, and more.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: '#00bcd4', fontFamily: 'inherit' }}>Get Started with Fluxtility</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'inherit' }}>
              Ready to streamline your community management and offer advanced tools for your members? Get started today by joining our Discord!
            </Typography>

            {/* Join Discord button using the new StyledButton */}
            <StyledButton
              href="https://discord.com/invite/fluxinc"  // Link to the provided Discord invite
              target="_blank"  // Opens link in a new tab
              rel="noopener noreferrer"  // Security measure for external links
            >
              <FaDiscord style={{ marginRight: '10px' }} /> Join Discord
            </StyledButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Fluxtility;

