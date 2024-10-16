import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Staking from './Staking';
import TraitSwapping from './TraitSwapping';
import Adventure from './Adventure';
import Fluxtility from './Fluxtility';

// List of services
const servicesList = [
  { id: 'staking', title: 'Staking', component: <Staking /> },
  { id: 'adventure', title: 'Adventure', component: <Adventure /> },
  { id: 'trait-swapping', title: 'Trait Swapping', component: <TraitSwapping /> },
  { id: 'fluxtility', title: 'Fluxtility', component: <Fluxtility /> },
];

// Styled Link for H1 clickable links
const ServiceLink = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: '#00bcd4', // Blue/Teal color
  cursor: 'pointer',
  margin: '10px 0',
  fontFamily: 'Bebas Neue, Arial, sans-serif', // Move font settings inside the object
  '&:hover': {
    textDecoration: 'underline',
  },
}));

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

function Services() {
  const [activeService, setActiveService] = useState(null);

  const handleServiceClick = (serviceId) => {
    // Toggle the service component
    setActiveService((prevService) => (prevService === serviceId ? null : serviceId));
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Heading */}
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
          color: '#00bcd4',
          letterSpacing: '0.1em',
          fontFamily: 'Bebas Neue, Arial, sans-serif',
          fontSize: '3rem',
        }}
      >
        Services
      </Typography>

      {/* Clickable Links */}
      <Grid container justifyContent="center">
        {servicesList.map((service) => (
          <Grid item xs={12} key={service.id} onClick={() => handleServiceClick(service.id)}>
            <ServiceLink variant="h4">
              {activeService === service.id ? `(-) ${service.title}` : `(+) ${service.title}`}
            </ServiceLink>

            {/* Show component only if the link is active */}
            {activeService === service.id && (
              <FullWidthContainer>
                {service.component}
              </FullWidthContainer>
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Services;

