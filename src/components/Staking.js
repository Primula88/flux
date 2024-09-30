import React from 'react';
import { Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import StakingImg from '../assets/staking.webp';  // Import the staking image

const StakingImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',  // Ensures the image covers the container without distortion
  borderRadius: '8px',
  marginBottom: theme.spacing(2),
}));

function Staking() {
  return (
    <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', borderRadius: '16px', padding: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)' }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <StakingImage src={StakingImg} alt="Staking Platform" />  {/* Using the imported image */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom sx={{ color: '#00bcd4', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              Staking Platform
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              Offer a unique staking experience for your holders. Gamify traits by adding staking boosters for designated traits and reward with up to 3 different tokens.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              This platform helps projects provide a unique staking experience to their holders.
            </Typography>
            <Button variant="contained" sx={{ mt: 2, backgroundColor: '#00bcd4' }}>
              Learn More
            </Button>
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
            <Typography variant="h5" sx={{ color: '#00bcd4', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>Get the Platform for Your Project</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              The platform is available for white-label solutions with various payment plans. Join our Discord to open an adventure ticket and get started!
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

export default Staking;

