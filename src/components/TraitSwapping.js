import React from 'react';
import { Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import TraitImg from '../assets/traits.webp';  // Import the image

const TraitImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',  // Ensures the image covers the container without distortion
  borderRadius: '8px',
  marginBottom: theme.spacing(2),
}));

function TraitSwapping() {
  return (
    <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', borderRadius: '16px', padding: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)' }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TraitImage src={TraitImg} alt="Trait Swapping Platform" /> {/* Use the imported image */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom sx={{ color: '#00bcd4', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
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
            <Typography variant="h5" sx={{ color: '#00bcd4', fontFamily: 'Bebas Neue, Arial, sans-serif' }}>Get the Platform for Your Project</Typography>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif' }}>
              The Trait Swapping Platform is available for white-label solutions with various payment plans. Join our Discord to open a ticket and get started!
            </Typography>
             <Button 
  variant="contained" 
  sx={{ 
    mt: 2, 
    backgroundColor: '#00bcd4', 
    fontFamily: 'inherit', // Ensure it inherits the app-wide font
    fontSize: '16px',       // Set a standard size for better appearance
    textTransform: 'none'   // Disable uppercase transformation for a clean look
  }} 
  href="https://discord.com/invite/fluxinc"  // Link to the provided Discord invite
  target="_blank"  // Opens link in a new tab
  rel="noopener noreferrer"  // Security measure for external links
>
  Join Discord
</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default TraitSwapping;

