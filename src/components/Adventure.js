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

function Adventure() {
  return (
    <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '20px' }}>
      <CardContent>
        <Grid container spacing={3} justifyContent="center">
          {/* Make this grid item take full width and center its content */}
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ color: '#00bcd4', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              Adventure Platform
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              A highly engaging, chance-based platform that allows you to send your NFTs on Adventures. These are fully customizable missions with set time periods and multiple reward possibilities.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              This platform helps projects provide fun and engagement within their communities, while rewarding holders and creating a strong revenue stream for the project.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: '#ff9800', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>How Does it Work?</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              Prizes, Adventure length, Maximum number of adventurers, and cost are set by the team. Holders can then select their NFT, confirm the transaction, and send it on an adventure. The NFT remains in their wallet but is frozen until claimed.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              You can send up to 18 NFTs at a time on PC and 9 at a time on Mobile.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ color: '#ff9800', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>For Projects:</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              - Increased engagement inside the Discord <br />
              - Custom Adventure UI <br />
              - Strong revenue stream <br />
              - Burn project token <br />
              - 100% ROI in under 3 months
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ color: '#ff9800', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>For Holders:</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              - Earn amazing rewards <br />
              - Support your project <br />
              - Fun and engaging experiences <br />
              - Brag about your adventure in Discord <br />
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: '#ff9800', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>What Else Can the Platform Do?</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              The platform can also be used for Idle Games, gamified raffles, and many other experiences. Raffle an NFT through an adventure or set different adventures with varying rewards.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: '#00bcd4', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>Get the Platform for Your Project</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              The Adventure Platform is available for white-label solutions with various payment plans. Join our Discord to open an adventure ticket and learn more.
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

export default Adventure;

