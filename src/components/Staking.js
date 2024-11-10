import React, { useState } from 'react';
import { Typography, Card, CardContent, Grid, Modal, Box, useMediaQuery } from '@mui/material';
import styled from 'styled-components';
import stakingPic from '../assets/staking.webp'; // Import the staking image
import { FaDiscord } from 'react-icons/fa'; // Discord icon

// Styled Button (same as Fluxtility)
const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  border: 2px solid #6cdffb;
  border-radius: 50px;
  color: #6cdffb;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  max-width: 300px;
  margin: 0 auto;

  &:hover {
    background-color: #6cdffb;
    color: #121212;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 8px 20px;
    max-width: 200px;
  }
`;


// Staking Image (similar to Fluxtility)
const StakingImage = styled.img`
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
  border-radius: 10px;
`;

const TextItem = styled(Typography)`
  display: flex;
  text-align: left;
  margin-bottom: 12px !important;
  color: white;
  font-family: 'Apple Symbols', sans-serif;
  font-size: 1.1rem;
`;

// List item with Apple Symbols font (same as Fluxtility)
const ListItem = styled(Typography)`
  display: flex;
  text-align: left;
  margin-bottom: 12px !important;
  color: white;
  font-family: 'Apple Symbols', sans-serif;
  font-size: 1.1rem;

  &::before {
    content: '•';
    color: #6cdffb;
    font-size: 1.5rem;
    margin-right: 8px;
  }
`;

// Styled component for the right section with scrollbar
const RightSection = styled.div`
  overflow-y: auto;
  max-height: 750px;
  padding: 20px;
  position: relative;
  text-align: left;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    position: absolute;
    left: 0;
  }

  &::-webkit-scrollbar-track {
    background: #2e2e2e;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6cdffb;
    border-radius: 10px;
    border: 2px solid #1e1e1e;
  }

  @media (max-width: 960px) {
    overflow: visible;
    max-height: none;
  }
`;

function Staking() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isDesktop = useMediaQuery('(min-width: 960px)'); // Media query for desktop view

  return (
    <Card sx={{ color: '#fff', padding: '20px', boxShadow: 'none', backgroundColor: 'transparent' }}>
      <CardContent>
        <Grid container spacing={3}>
          {/* Left Section: Centered Image and Invite Button */}
          <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
            <StakingImage src={stakingPic} alt="Staking" />
            <StyledButton href="https://discord.com/invite/fluxinc" target="_blank" rel="noopener noreferrer">
              <FaDiscord style={{ marginRight: '10px' }} /> Join Discord
            </StyledButton>
          </Grid>

          {/* Right Section: Description and Feature List */}
          <Grid item xs={12} md={9}>
            <RightSection>
              <Typography variant="h3" sx={{ color: '#6cdffb', fontFamily: 'Bebas Neue, Arial, sans-serif', mb: 2 }}>
                Flux Inc. Staking
              </Typography>
              <TextItem>
                We offer a unique staking experience for our clients. Our platform allows you to gamify traits by adding staking boosters for designated traits, as well as reward up to 3 different tokens.
              </TextItem>

              <Typography variant="h4" sx={{ color: '#6cdffb', fontFamily: 'Bebas Neue, Arial, sans-serif', mt: 2 }}>
                Project Owner Benefits
              </Typography>
              <ListItem>Non-Custodial Staking</ListItem>
              <ListItem>Setup 3 Different Collections</ListItem>
              <ListItem>Reward Holders with 3 Different Tokens</ListItem>
              <ListItem>Customize your UI to match your colors, logos, and background</ListItem>
              <ListItem>Allows projects to set their own stake/unstake and claim fees</ListItem>

              <Typography variant="h4" sx={{ color: '#6cdffb', fontFamily: 'Bebas Neue, Arial, sans-serif', mt: 2 }}>
                Holder Benefits
              </Typography>
              <ListItem>Stake All Button - Quickly stake multiple NFTs with one click</ListItem>
              <ListItem>Claim All Button - Quickly claim multiple NFTs with one click</ListItem>
              <ListItem>Earn up to 3 different tokens</ListItem>
              <ListItem>Quickly Download their NFT images</ListItem>

          <Typography
  variant="h4"
  sx={{
    color: '#6cdffb',
    fontFamily: 'Bebas Neue, Arial, sans-serif',
    mt: 2,
    textAlign: 'center',
    cursor: 'pointer', // Make it look clickable
    transition: 'color 0.3s ease', // Smooth color transition on hover
    '&:hover': {
      color: '#5ac6e0', // Slightly darker shade for hover effect
    },
  }}
  onClick={handleOpen}
>
  Click for Fees
</Typography>
  
          </RightSection>
          </Grid>
        </Grid>
      </CardContent>

      {/* Modal for Pricing Info */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ p: 4, bgcolor: '#121212', borderRadius: 2, maxWidth: 400, mx: 'auto', mt: '20vh' }}>
          <Typography variant="h5" sx={{ color: '#6cdffb', fontFamily: 'Bebas Neue, Arial, sans-serif', mb: 2 }}>
            Staking Pricing Info
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff', fontFamily: 'Arial, sans-serif' }}>
            • Elite: $500 / 0.0015 STAKE & UNSTAKE FEE + 0.003 CLAIM FEE <br />
            • Premium: $250 / 0.003 STAKE & UNSTAKE FEE + 0.005 CLAIM FEE <br />
            • Standard: 0.005 STAKE & UNSTAKE FEE + 0.0065 CLAIM FEE <br />
            <br />
            Down payments to be paid in USDC.<br />
            All fees paid in Solana during claim and/or stake & unstake transactions.
          </Typography>
        </Box>
      </Modal>
    </Card>
  );
}

export default Staking;

