import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import Staking from './Staking';
import TraitSwapping from './TraitSwapping';
import Adventure from './Adventure';
import Fluxtility from './Fluxtility'; // Import the Fluxtility component

// Import images for each service
import StakingImg from '../assets/staking.webp';
import TraitSwappingImg from '../assets/traits.webp';
import AdventureImg from '../assets/adventure.webp';
import FluxtilityImg from '../assets/fluxtility.webp'; // Import Fluxtility image

// Styled component for the service image
const ServiceImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: theme.spacing(2),
}));

// Use Material-UI Button component and style it
const StyledButton = styled(Button)(({ theme }) => ({
  padding: '10px 30px',
  border: '2px solid #00bcd4',
  borderRadius: '50px',
  color: '#00bcd4',
  fontSize: '18px',
  fontWeight: '600',
  textDecoration: 'none',
  maxWidth: '200px',
  margin: '20px auto', // Center align the button
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: '#00bcd4',
    color: '#121212',
  },
}));

// Add Fluxtility to the servicesList array
const servicesList = [
  { id: 'staking', title: 'Staking', component: <Staking />, image: StakingImg },
  { id: 'trait-swapping', title: 'Trait Swapping', component: <TraitSwapping />, image: TraitSwappingImg },
  { id: 'adventure', title: 'Adventure', component: <Adventure />, image: AdventureImg },
  { id: 'fluxtility', title: 'Fluxtility', component: <Fluxtility />, image: FluxtilityImg }, // Fluxtility added
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (serviceId) => {
    const service = servicesList.find((service) => service.id === serviceId);
    setSelectedService(service);
  };

  return (
    <div style={{ padding: '20px' }}>
      {!selectedService ? (
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
                  borderRadius: '12px', // Add rounded corners for a smooth feel
                  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.05), 0 2px 2px #64d9fb', // Subtle 3D shadow
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease', // Smooth hover effect
                  '&:hover': {
                    transform: 'translateY(-4px)', // Subtle lift on hover
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px #64d9fb', // Slightly enhanced shadow on hover
                  },
                }}
                onClick={() => handleServiceClick(service.id)}
              >
                <CardContent>
                  <ServiceImage src={service.image} alt={`${service.title} Image`} />
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      textAlign: 'center',
                      color: '#00bcd4',
                      letterSpacing: '0.25em',
                      fontFamily: 'Bebas Neue, Arial, sans-serif', // Using Bebas Neue font
                    }}
                  >
                    {service.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>
          {/* Using StyledButton */}
          <StyledButton onClick={() => setSelectedService(null)}>
            Back
          </StyledButton>
          {selectedService.component}
        </div>
      )}
    </div>
  );
}

export default Services;

