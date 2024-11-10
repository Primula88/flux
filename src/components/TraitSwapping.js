import React, { useState } from 'react';
import { Typography, Card, CardContent, Grid, Modal, Box } from '@mui/material';
import styled from 'styled-components';
import traitSwapImage from '../assets/traits.webp'; // Example image for Trait Swapping
import { FaDiscord } from 'react-icons/fa'; // Discord icon

// Styled Button (consistent with Adventure)
const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border: 2px solid #6cdffb;
  border-radius: 50px;
  color: #6cdffb;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  max-width: 250px;
  margin: 20px auto;
  font-family: 'Akira', sans-serif;

  &:hover {
    background-color: #6cdffb;
    color: #121212;
  }

  .discord-icon {
    font-size: 30px;
    margin-right: 8px;
  }
`;

// Trait Swapping Image
const TraitImage = styled.img`
  width: 100%;
  max-width: 440px;
  border-radius: 10px;
  margin-top: 20px;
`;

// Text and list item styles
const TextItem = styled(Typography)`
  display: flex;
  text-align: left;
  margin-bottom: 12px !important;
  color: white;
  font-family: 'Apple Symbols', sans-serif;
  font-size: 1.1rem;
`;

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

function TraitSwapping() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ color: '#fff', boxShadow: 'none', backgroundColor: 'transparent' }}>
      <CardContent>
        <Grid container spacing={3}>
          {/* Left Section: Trait Swapping Image and Invite Button */}
          <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
            <TraitImage src={traitSwapImage} alt="Trait Swapping" />
            <StyledButton href="https://discord.com/invite/fluxinc" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="discord-icon" /> Join Discord
            </StyledButton>
          </Grid>

          {/* Right Section: Description and Feature List */}
          <Grid 
            item 
            xs={12} 
            md={9} 
            style={{
              paddingLeft: window.innerWidth >= 960 ? '80px' : '0px', // Apply 80px padding on desktop
              textAlign: 'left'
            }}
          >  
            <RightSection>
              <Typography variant="h3" sx={{ color: '#fff', fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '0.2em', mb: 2 }}>
                Flux Inc <span style={{ color: '#6cdffb' }}>Trait</span> Swapper
              </Typography>
              <TextItem>
                This platform helps projects provide a unique NFT update experience to their holders with a clean user interface and smooth processing.
              </TextItem>

              <Typography variant="h4" sx={{ color: '#6cdffb', fontFamily: 'Bebas Neue, Arial, sans-serif', mt: 2 }}>
                Project Benefits
              </Typography>
              <ListItem>Allow holders to customize their NFT to fit their style</ListItem>
              <ListItem>Setup a custom UI (Color palette, logos, background)</ListItem>
              <ListItem>Allows projects to set their own fees to create additional revenue stream and token burn mechanism</ListItem>
              <ListItem>Mint and manage traits from the dashboard</ListItem>

              <Typography variant="h4" sx={{ color: '#6cdffb', fontFamily: 'Bebas Neue, Arial, sans-serif', mt: 2 }}>
                Holder Benefits
              </Typography>
              <ListItem>Customize their NFTs</ListItem>
              <ListItem>Burn tokens earned from staking</ListItem>
              <ListItem>Create unique NFT pieces based on favorite items</ListItem>
              <ListItem>Adds additional opportunities to sell and trade sought-after traits and rare items</ListItem>

              {/* Click for Fees Button */}
              <Typography
                variant="h4"
                sx={{
                  color: '#6cdffb',
                  fontFamily: 'Bebas Neue, Arial, sans-serif',
                  mt: 2,
                  textAlign: 'center',
                  cursor: 'pointer', // Makes it look clickable
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
            Swapper Pricing Info
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff', fontFamily: 'Arial, sans-serif' }}>
            • Elite: $750 + 0.0025 PER TRAIT APPLIED <br />
            • Premium: $500 + 0.005 PER TRAIT APPLIED <br />
            • Standard: $250 + 0.007 PER TRAIT APPLIED <br />
            • Basic: 0.009 PER TRAIT APPLIED <br />
            <br />
            Down payments to be paid in USDC.<br />
            All fees paid in Solana during additions and removals.
          </Typography>
        </Box>
      </Modal>
    </Card>
  );
}

export default TraitSwapping;

