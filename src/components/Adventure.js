import React from 'react';
import { Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import AdventureImg from '../assets/adventure.webp';  // Importing the image

const AdventureImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',  // Ensures the image covers the container without distortion
  borderRadius: '8px',
  marginBottom: theme.spacing(2),
}));

function Adventure() {
  return (
    <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', borderRadius: '16px', padding: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)' }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <AdventureImage src={AdventureImg} alt="Adventure Platform" /> {/* Using the imported image */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom sx={{ color: '#00bcd4' }}>
              Adventure Platform
            </Typography>
            <Typography variant="body1" gutterBottom>
              A highly engaging, chance-based platform that allows you to send your NFTs on Adventures. These are fully customizable missions with set time periods and multiple reward possibilities.
            </Typography>
            <Typography variant="body1" gutterBottom>
              This platform helps projects provide fun and engagement within their communities, while rewarding holders and creating a strong revenue stream for the project.
            </Typography>
            <Button variant="contained" sx={{ mt: 2, backgroundColor: '#00bcd4' }}>
              Learn More
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: '#ff9800' }}>How Does it Work?</Typography>
            <Typography variant="body2" gutterBottom>
              Prizes, Adventure length, Maximum number of adventurers, and cost are set by the team. Holders can then select their NFT, confirm the transaction, and send it on an adventure. The NFT remains in their wallet but is frozen until claimed.
            </Typography>
            <Typography variant="body2" gutterBottom>
              You can send up to 18 NFTs at a time on PC and 9 at a time on Mobile.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ color: '#ff9800' }}>For Projects:</Typography>
            <Typography variant="body2" gutterBottom>
              - Increased engagement inside the Discord <br />
              - Custom Adventure UI <br />
              - Strong revenue stream <br />
              - Burn project token <br />
              - 100% ROI in under 3 months
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ color: '#ff9800' }}>For Holders:</Typography>
            <Typography variant="body2" gutterBottom>
              - Earn amazing rewards <br />
              - Support your project <br />
              - Fun and engaging experiences <br />
              - Brag about your adventure in Discord <br />
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: '#ff9800' }}>What Else Can the Platform Do?</Typography>
            <Typography variant="body2" gutterBottom>
              The platform can also be used for Idle Games, gamified raffles, and many other experiences. Raffle an NFT through an adventure or set different adventures with varying rewards.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: '#00bcd4' }}>Get the Platform for Your Project</Typography>
            <Typography variant="body2" gutterBottom>
              The Adventure Platform is available for white-label solutions with various payment plans. Join our Discord to open an adventure ticket and learn more.
            </Typography>
            <Button variant="contained" sx={{ mt: 2, backgroundColor: '#00bcd4' }}>
              Join Discord
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Adventure;


