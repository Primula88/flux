import React, { useState } from 'react';
import { Typography, Card, CardContent, Grid, Modal, Box } from '@mui/material';
import styled from 'styled-components';
import adventurePic from '../assets/adventure.webp'; // Import the adventure image

// Styled Button (consistent with Fluxtility)
const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border: 2px solid #6cdffb;
  border-radius: 50px;
  color: #fff;
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

// Adventure Image (consistent with Fluxtility)
const AdventureImage = styled.img`
  width: 75%;
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

function Adventure() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ color: '#fff', boxShadow: 'none', backgroundColor: 'transparent' }}>
      <CardContent>
        <Grid container spacing={3}>
          {/* Left Section: Adventure Image and Invite Button */}
          <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
            <AdventureImage src={adventurePic} alt="Adventure" />
            <StyledButton href="https://discord.com/invite/fluxinc" target="_blank" rel="noopener noreferrer">
              Join Discord
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
                Flux <span style={{ color: '#6cdffb' }}>Adventures</span> Platform
              </Typography>
              <TextItem>
                A highly engaging chance-based platform that allows you to send your NFTs on Adventures. These are fully customizable missions with set time periods and multiple reward possibilities.
              </TextItem>

              <Typography variant="h4" sx={{ color: '#6cdffb', fontFamily: 'Bebas Neue, Arial, sans-serif', mt: 2 }}>
                How does it work?
              </Typography>
              <TextItem>
                This platform helps projects provide engagement within their communities, while rewarding holders and creating a strong revenue stream for the project.
              </TextItem>

              <Typography variant="h4" sx={{ color: '#6cdffb', fontFamily: 'Bebas Neue, Arial, sans-serif', mt: 2 }}>
                Project Owner Benefits
              </Typography>
              <ListItem>Increased engagement inside the Discord</ListItem>
              <ListItem>Gives holders incentive to stay with the project</ListItem>
              <ListItem>Custom Adventure UI (Color palette, logos, background)</ListItem>
              <ListItem>Project revenue stream</ListItem>
              <ListItem>Burn project token</ListItem>
              <ListItem>100% ROI in under 3 months</ListItem>

              <Typography variant="h4" sx={{ color: '#6cdffb', fontFamily: 'Bebas Neue, Arial, sans-serif', mt: 2 }}>
                Holder Benefits
              </Typography>
              <ListItem>Exciting gamified staking experience</ListItem>
              <ListItem>Rewarded by the project through its own utility</ListItem>
              <ListItem>Use case for the token being staked</ListItem>
              <ListItem>Prizes!</ListItem>

            <Typography 
              onClick={handleOpen}
              sx={{
                fontFamily: 'Bebas Neue, Arial, sans-serif',
                color: '#6cdffb',
                textAlign: 'left',
                cursor: 'pointer',
                letterSpacing: '0.2em',
                mt: 2
              }}
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
            Adventures Pricing Info
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff', fontFamily: 'Arial, sans-serif' }}>
            • $750 Upfront ➔ 0.0033 SEND FEE PER NFT <br />
            • $500 Upfront ➔ 0.0066 SEND FEE PER NFT <br />
            • $0 Upfront ➔ 0.009 SEND FEE PER NFT <br />
            <br />
            Down payments to be paid in USDC.<br />
            All fees paid in Solana during adventure transactions.
          </Typography>
        </Box>
      </Modal>
    </Card>
  );
}

export default Adventure;

