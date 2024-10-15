import React from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';

function WhoWeAre() {
  return (
    <Card sx={{ padding: '20px', backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardContent>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {/* Full Width Text Section */}
          <Grid item xs={12}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                textAlign: 'center',
                color: '#00bcd4',
                letterSpacing: '0.1em',
                fontFamily: 'Bebas Neue, Arial, sans-serif',
                fontSize: '3rem', // Adjust the size based on design preferences
              }}
            >
              Who We Are
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontFamily: 'Bebas Neue, Arial, sans-serif',
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: '#fff',
              }}
            >
              Flux Inc. is the umbrella under which we house various development ventures as well as our PFP projects, the Time Traveling Chimps, and newest addition minting soon, the Portal Beasts. Our goal is to offer professionally developed tools for all projects throughout Solana. This page will give you a glimpse of the products and services we offer and are currently developing to show you some of the ways we are changing how the Solana Eco System interacts.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontFamily: 'Bebas Neue, Arial, sans-serif',
                fontSize: '1.2rem',
                color: '#fff',
                lineHeight: '1.8',
              }}
            >
              <a href="https://magiceden.io/creators/fluxinc" style={{ color: '#00bcd4', textDecoration: 'none' }}>
                Our Collections
              </a>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default WhoWeAre;

