import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Staking from './Staking';
import TraitSwapping from './TraitSwapping';
import Adventure from './Adventure';
import Fluxtility from './Fluxtility';

// Import images for each service
import StakingImg from '../assets/staking.webp';
import TraitSwappingImg from '../assets/traits.webp';
import AdventureImg from '../assets/adventure.webp';
import FluxtilityImg from '../assets/fluxtility.webp';

// Styled component for the service image
const ServiceImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'contain',
  borderRadius: '8px',
  marginBottom: theme.spacing(2),
}));

// List of services
const servicesList = [
  { id: 'staking', title: 'Staking', component: <Staking />, image: StakingImg },
  { id: 'trait-swapping', title: 'Trait Swapping', component: <TraitSwapping />, image: TraitSwappingImg },
  { id: 'adventure', title: 'Adventure', component: <Adventure />, image: AdventureImg },
  { id: 'fluxtility', title: 'Fluxtility', component: <Fluxtility />, image: FluxtilityImg },
];

function Services() {
  const [activeService, setActiveService] = useState(null);

  const handleServiceClick = (serviceId) => {
    setActiveService(prevService => (prevService === serviceId ? null : serviceId));
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Add H1 heading with Bebas Neue font */}
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
          color: '#00bcd4',  // Set a suitable color
          letterSpacing: '0.1em',
          fontFamily: 'Bebas Neue, Arial, sans-serif',
          fontSize: '3rem', // Adjust the size based on design preferences
        }}
      >
        Services
      </Typography>

      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {servicesList.map((service) => (
          <Grid
            item
            xs={12} // Full width on mobile
            sm={6} // 2 columns on tablets and above
            md={6} // 2 columns on desktops
            key={service.id}
          >
            <Card
              sx={{
                backgroundColor: '#1e1e1e',
                color: '#fff',
                cursor: 'pointer',
                borderRadius: '12px',
                boxShadow: '0 2px 2px rgba(0, 0, 0, 0.05), 0 2px 2px #64d9fb',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px #64d9fb',
                },
                height: activeService === service.id ? 'auto' : '320px', // Fixed height when not active
              }}
              onClick={() => handleServiceClick(service.id)}
            >
              <CardContent sx={{ padding: '20px' }}>
                {/* Show the image and title only if this service is not active */}
                {activeService !== service.id && (
                  <>
                    <ServiceImage src={service.image} alt={`${service.title} Image`} />
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        textAlign: 'center',
                        color: '#fff',
                        letterSpacing: '0.25em',
                        fontFamily: 'Bebas Neue, Arial, sans-serif',
                      }}
                    >
                      {service.title}
                    </Typography>
                  </>
                )}

                {/* Show the service content only if this service is active */}
                {activeService === service.id && (
                  <div style={{ display: 'block' }}>
                    {service.component}
                  </div>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Services;

