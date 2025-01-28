import React, { useState } from 'react';
import { Typography, Card, CardContent, Grid, Modal, Box } from '@mui/material';
import styled from 'styled-components';
import fluxtilityPic from '../assets/fluxtility.webp';

// Styled Button with Akira font and adjusted icon/text sizes
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

const FluxtilityImage = styled.img`
  width: 75%;
  max-width: 440px;
  border-radius: 10px;
`;

// List item with Apple Symbols font
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

function Fluxtility() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ color: '#fff', boxShadow: 'none', backgroundColor: 'transparent' }}>
      <CardContent>
        <Grid container spacing={0}>
          {/* Left Section: Image and Invite Button */}
          <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
            <FluxtilityImage src={fluxtilityPic} alt="Fluxtility" />
            <StyledButton href="https://discord.com/oauth2/authorize?client_id=1041223731328065607&permissions=361047256272&scope=applications.commands%20bot" target="_blank" rel="noopener noreferrer">
              Invite Fluxtility
            </StyledButton>
            <StyledButton href="https://forms.gle/ytwduz9x9JhUX3Z87" target="_blank" rel="noopener noreferrer">
              Request Service
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
            <Typography variant="h3" sx={{ color: 'white', fontFamily: 'Bebas Neue, Arial, sans-serif', mb: 2, letterSpacing: '0.2em', textAlign: 'left' }}>
              FLUXTILITY <span style={{ color: '#6cdffb' }}>Discord</span> App Suite
            </Typography>

            <ListItem>Solana Wallet / Discord Integration system (Discord Solana Wallet)</ListItem>
            <ListItem>Advanced web3 R2E module with auto rewards in Solana, NFTs, and other SPL tokens (no claim required)</ListItem>
            <ListItem>On-Chain NFT/TOKEN Raffle system with auto reward (no claim required)</ListItem>
            <ListItem>On-Chain NFT/TOKEN Giveaway system with auto reward (no claim required)</ListItem>
            <ListItem>On-Chain NFT auction system with auto reward (no claim required)</ListItem>
            <ListItem>On-Chain NFT p2p Swap system in the server through private threads!</ListItem>
            <ListItem>Advanced snapshot tool for NFT hashlists and wallet hashlist creation</ListItem>
            <ListItem>Direct tipping in server; send NFTs and tokens with no claim needed from the recipient</ListItem>
            <ListItem>Detailed Sales, Listings, Volume, and Wallet tracker</ListItem>

            <Typography 
              onClick={handleOpen}
              sx={{
                fontFamily: 'Bebas Neue, Arial, sans-serif',
                color: '#6cdffb',
                textAlign: 'center',
                cursor: 'pointer',
                letterSpacing: '0.2em',
                mt: 2
              }}
            >
              Fluxtility is free to add to your server with minimal <span style={{ color: 'white' }}>fees</span> on certain transactions.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      {/* Modal for Pricing Info */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ p: 4, bgcolor: '#121212', borderRadius: 2, maxWidth: 400, mx: 'auto', mt: '20vh' }}>
          <Typography variant="h5" sx={{ color: '#6cdffb', fontFamily: 'Bebas Neue, Arial, sans-serif', mb: 2 }}>
            Fluxtility Pricing Info
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff', fontFamily: 'Arial, sans-serif' }}>
            Fluxtility has no upfront costs. You can use the App suite with minimal fees on specific transactions:
            <br />
            <br />
            • Raffle Create: 0.01<br />
            • Auction Create: 0.01<br />
            • On-Chain Giveaway Create: 0.01<br />
            • DAO Transfer: 0.001<br />
            • DAO Withdraw: 0.001<br />
            • Raid2Earn Reward (if set): 0.01<br />
            • RaidDraw (if set): 0.001<br />
            • Trade/Swap: 0.01 each person
          </Typography>
        </Box>
      </Modal>
    </Card>
  );
}

export default Fluxtility;

