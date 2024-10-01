import React from 'react';
import { Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import FluxtilityImg from '../assets/fluxtility.webp';  // Import Fluxtility image

const FluxtilityImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',  // Ensures the image covers the container without distortion
  borderRadius: '8px',
  marginBottom: theme.spacing(2),
}));

function Fluxtility() {
  return (
    <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', borderRadius: '16px', padding: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)' }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FluxtilityImage src={FluxtilityImg} alt="Fluxtility Platform" /> {/* Using the imported image */}
          </Grid>
          <Grid item xs={12} sm={6}>
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
            <Button 
              variant="contained" 
              sx={{ 
                mt: 2, 
                backgroundColor: '#00bcd4', 
                fontFamily: 'inherit', 
                fontSize: '16px',
                textTransform: 'none'
              }} 
              href="https://discord.com/invite/fluxinc"  // Link to the provided Discord invite
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Fluxtility;

