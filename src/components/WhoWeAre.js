import React, { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardContent, useMediaQuery } from '@mui/material';
import styled from 'styled-components';

// Import all the .webp images
import Image1 from '../assets/sidescroll/1-1.webp';
import Image2 from '../assets/sidescroll/1-2.webp';
import Image4 from '../assets/sidescroll/1-4.webp';
import Image6 from '../assets/sidescroll/1-6.webp';
import Image7 from '../assets/sidescroll/1-7.webp';
import Image8 from '../assets/sidescroll/1-8.webp';
import Image9 from '../assets/sidescroll/1.webp';
import Image10 from '../assets/sidescroll/2.webp';
import Image11 from '../assets/sidescroll/3.webp';
import Image12 from '../assets/sidescroll/4.webp';
import Image13 from '../assets/sidescroll/7.webp';

// List of images
const images = [
  Image1, Image2, Image4, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13,
];

// Utility function to shuffle the images randomly
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

// Styled Sidescroller Container
const SidescrollerWrapper = styled.div`
  width: 100vw; /* Ensures full screen width */
  overflow: hidden;
  margin-bottom: 20px;
`;

const Sidescroller = styled.div`
  display: flex;
  width: 200%; /* Double the width to allow smooth looping */
  animation: scroll 40s linear infinite; /* Infinite scrolling animation */

  @keyframes scroll {
    0% {
      transform: translateX(0); /* Start at the beginning */
    }
    100% {
      transform: translateX(-50%); /* Scroll to the midpoint, then loop */
    }
  }

  img {
    height: 250px; /* Uniform height for all images */
    flex-shrink: 0;
    width: auto; /* Maintain image aspect ratio */
    /* Removed margin between images */
  }
`;

function WhoWeAre() {
  const isDesktop = useMediaQuery('(min-width: 960px)'); // Media query to check for desktop screens
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    // Shuffle images on component mount
    setShuffledImages(shuffleArray([...images]));
  }, []);

  return (
    <Card sx={{ padding: '20px', backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardContent>
        {/* Sidescroller for Desktop */}
        {isDesktop && (
          <SidescrollerWrapper>
            <Sidescroller>
              {/* Double the images for smooth looping */}
              {shuffledImages.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} />
              ))}
              {shuffledImages.map((image, index) => (
                <img key={`${index}-loop`} src={image} alt={`Image Loop ${index + 1}`} />
              ))}
            </Sidescroller>
          </SidescrollerWrapper>
        )}

        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {/* Full Width Text Section */}
          <Grid item xs={12}>
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
              Flux Inc. is the umbrella under which we house various development ventures as well as our PFP projects, the Time Traveling Chimps and the Portal Beasts. Our goal is to offer professionally developed tools for all projects throughout Solana. This page will give you a glimpse of the products and services we offer and are currently developing to show you some of the ways we are changing how the Solana Eco System interacts.
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
              <a href="https://magiceden.io/creators/fluxinc" style={{ color: '#83d6f7', textDecoration: 'none' }}>
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

