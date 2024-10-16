import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import styled from 'styled-components';  // Use styled-components for button styling
import { FaDiscord } from 'react-icons/fa'; // Discord icon

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
  }
`;

function TraitSwapping() {
  return (
    <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '20px', boxShadow: 'none'  }}>
      <CardContent>
        <Grid container spacing={3} justifyContent="center">
          {/* Full width grid item for the title and description */}
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              Trait Swapping Platform
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              Flux Inc. provides a trait swapping platform that allows your holders to update the look of their NFTs with new traits you release.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              This platform helps projects provide a unique NFT update experience to their holders.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: '#ff9800', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>How Does it Work?</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              Holders visit the trait swapping platform, select their NFT, and choose from the traits provided. They are charged a Sol fee and a token fee for each applied trait or removal. Projects set the fees for each action.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ color: '#ff9800', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>For Projects:</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              - Allow holders to customize NFTs <br />
              - Setup a custom UI <br />
              - Create another revenue stream and token burn mechanism <br />
              - Mint and manage traits from the dashboard
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ color: '#ff9800', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>For Holders:</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              - Customize their NFTs <br />
              - Burn tokens earned from staking <br />
              - Create unique NFT pieces <br />
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: '#83d6f7', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>Get the Platform for Your Project</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              The Trait Swapping Platform is available for white-label solutions with various payment plans. Join our Discord to open a ticket and get started!
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

export default TraitSwapping;

