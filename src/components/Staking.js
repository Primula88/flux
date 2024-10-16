import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import styled from 'styled-components';  // Using styled-components for button styling

// Styled Button (reusing the button style)
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
  max-width: 300px; /* Limit the button width */
  margin: 0 auto; /* Center align the button */
  
  &:hover {
    background-color: #83d6f7;
    color: #121212;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 8px 20px;
    max-width: 200px; /* Adjust button width for smaller screens */
  }
`;

function Staking() {
  return (
    <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '20px', boxShadow: 'none' }}>
      <CardContent>
        <Grid container spacing={3} justifyContent="center">
          {/* Full width grid item for the title and description */}
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              Staking Platform
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              Offer a unique staking experience for your holders. Gamify traits by adding staking boosters for designated traits and reward with up to 3 different tokens.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              This platform helps projects provide a unique staking experience to their holders.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: '#ff9800', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>How Does it Work?</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              You simply fill out a form with the needed information, and we set up your staking for you. We provide a dashboard that gives you full control, allowing adjustments and offering support for any questions.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ color: '#ff9800', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>For Projects:</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              - Setup up to 3 different collections <br />
              - Reward holders with up to 3 different tokens <br />
              - Setup a custom UI <br />
              - Set stake/unstake and claim fees to help provide revenue
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ color: '#ff9800', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>For Holders:</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              - Stake multiple NFTs with the Stake All button <br />
              - Earn up to 3 different tokens <br />
              - Quickly download NFT images
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: '#ff9800', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>Admin Dashboard Preview</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              The dashboard allows you to control every aspect of staking, including setting rewards, collections, and fees. It offers a visual preview of all staked assets and their statuses.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>Get the Platform for Your Project</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              The platform is available for white-label solutions with various payment plans. Join our Discord to open an adventure ticket and get started!
            </Typography>

            {/* Join Discord button using the new StyledButton */}
            <StyledButton
              href="https://discord.com/invite/fluxinc"  // Link to the provided Discord invite
              target="_blank"  // Opens link in a new tab
              rel="noopener noreferrer"  // Security measure for external links
            >
              Join Discord
            </StyledButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Staking;

