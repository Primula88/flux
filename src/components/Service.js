import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Staking from './Staking';
import TraitSwapping from './TraitSwapping';
import Adventure from './Adventure';
import Fluxtility from './Fluxtility';
import PlusIcon from '../assets/plus.webp';
import MinusIcon from '../assets/minus.webp';
import AkiraFont from '../assets/font/AkiraExpandedDemo.otf'; // Custom font

// Custom font-face
const CustomTypography = styled(Typography)`
  @font-face {
    font-family: 'Akira';
    src: url(${AkiraFont}) format('opentype');
  }
  font-family: 'Akira', sans-serif;
  color: #83d6f7;
  margin: 10px 0;
  display: flex;
  align-items: center;
  text-align: left;
  cursor: pointer;
  font-size: 1.5rem; /* Base font size */
  white-space: nowrap; /* Prevent text wrapping */

  @media (min-width: 960px) {
    font-size: 2rem; /* Increase font size for desktop */
  }

  &:hover {
    text-decoration: underline;
  }
`;

// Wrapper to center the links while keeping the text aligned left
const CenteredContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; /* Ensure center alignment */
  gap: 15px; /* Increased space between items */
`;

// Styled for image icon
const IconImage = styled('img')`
  margin-right: 10px;
  width: 30px;
  height: 30px;

  @media (min-width: 960px) {
    width: 40px; /* Bigger on desktop */
    height: 40px; /* Bigger on desktop */
  }
`;

// Full width container for the component that expands
const FullWidthContainer = styled('div')(({ theme }) => ({
  width: '95%', // Default width for desktop
  margin: '20px 0',
  backgroundColor: '#1e1e1e',
  borderRadius: '12px',
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.05), 0 2px 2px #64d9fb',
  color: '#fff',
  overflow: 'hidden', // To clip the content during animation
  transition: 'max-height 0.5s ease', // Smooth transition
  maxHeight: '0', // Start with maxHeight 0
  [theme.breakpoints.down('sm')]: { // Media query for mobile
    width: '90%', // Make the card less wide on mobile
  },
}));

// Styled component to wrap the expanding content
const ExpandingContent = styled('div')`
  padding: ${({ theme }) => theme.spacing(4)};
`;

const servicesList = [
  { id: 'staking', title: 'Staking', component: <Staking /> },
  { id: 'adventure', title: 'Adventure', component: <Adventure /> },
  { id: 'trait-swapping', title: 'Trait Swapping', component: <TraitSwapping /> },
  { id: 'fluxtility', title: 'Fluxtility', component: <Fluxtility /> },
];

function Services() {
  const [activeService, setActiveService] = useState(null);

  const handleServiceClick = (serviceId) => {
    // Toggle the service component
    setActiveService((prevService) => (prevService === serviceId ? null : serviceId));
  };

  return (
    <div style={{ padding: '20px' }}>
      <CenteredContainer container>
        <Grid item xs={12} md={10}>
          {servicesList.map((service) => (
            <div key={service.id} style={{ width: '100%' }}>
              <div onClick={() => handleServiceClick(service.id)}>
                <CustomTypography variant="h4">
                  <IconImage
                    src={activeService === service.id ? MinusIcon : PlusIcon}
                    alt="Toggle Icon"
                  />
                  {service.title}
                </CustomTypography>
              </div>

              {/* Show component with animation */}
              <FullWidthContainer
                style={{
                  maxHeight: activeService === service.id ? '1000px' : '0',
                }}
              >
                {activeService === service.id && (
                  <ExpandingContent>
                    {service.component}
                  </ExpandingContent>
                )}
              </FullWidthContainer>
            </div>
          ))}
        </Grid>
      </CenteredContainer>
    </div>
  );
}

export default Services;

