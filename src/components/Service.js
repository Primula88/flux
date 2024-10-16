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
  font-size: 1.6rem; /* Reduced font size slightly to fit longer titles */
  white-space: nowrap; /* Prevent the text from wrapping into two lines */
  &:hover {
    text-decoration: underline;
  }
`;

// Wrapper to center the links while keeping the text aligned left
const CenteredContainer = styled(Grid)`
  display: flex;
  justify-content: center;
`;

// Styled for image icon
const IconImage = styled('img')`
  margin-right: 10px;
  width: 30px; /* Increased the icon size */
  height: 30px;
`;

// Full width container for the component that expands
const FullWidthContainer = styled('div')(({ theme }) => ({
  width: '95%', // Default width for desktop
  margin: '20px 0',
  backgroundColor: '#1e1e1e',
  borderRadius: '12px',
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.05), 0 2px 2px #64d9fb',
  padding: theme.spacing(4), // Default padding for desktop
  color: '#fff',
  [theme.breakpoints.down('sm')]: { // Media query for mobile
    width: '90%', // Make the card less wide on mobile
    padding: theme.spacing(2), // Reduce padding on mobile
  },
}));

// List of services
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
        <Grid item xs={12} md={10}> {/* Increased the container width */}
          {servicesList.map((service) => (
            <div key={service.id} onClick={() => handleServiceClick(service.id)}>
              <CustomTypography variant="h4">
                <IconImage src={activeService === service.id ? MinusIcon : PlusIcon} alt="Toggle Icon" />
                {service.title}
              </CustomTypography>

              {/* Show component only if the link is active */}
              {activeService === service.id && (
                <FullWidthContainer>
                  {service.component}
                </FullWidthContainer>
              )}
            </div>
          ))}
        </Grid>
      </CenteredContainer>
    </div>
  );
}

export default Services;

