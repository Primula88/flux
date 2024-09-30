import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import Staking from './Staking';
import TraitSwapping from './TraitSwapping';
import Adventure from './Adventure';

// Import images for each service
import StakingImg from '../assets/staking.webp';
import TraitSwappingImg from '../assets/traits.webp';
import AdventureImg from '../assets/adventure.webp';

// Styled component for the service image
const ServiceImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover', // Ensures the image fits properly within the container
  borderRadius: '8px',
  marginBottom: theme.spacing(2),
}));

const servicesList = [
  { id: 'staking', title: 'Staking', component: <Staking />, image: StakingImg }, // Use the imported image
  { id: 'trait-swapping', title: 'Trait Swapping', component: <TraitSwapping />, image: TraitSwappingImg }, // Use the imported image
  { id: 'adventure', title: 'Adventure', component: <Adventure />, image: AdventureImg }, // Use the imported image
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (serviceId) => {
    const service = servicesList.find((service) => service.id === serviceId);
    setSelectedService(service);
  };

  return (
    <div>
      {!selectedService ? (
        <Grid container spacing={3}>
          {servicesList.map((service) => (
            <Grid item xs={12} sm={4} key={service.id}>
              <Card
                sx={{ backgroundColor: '#1e1e1e', color: '#fff', cursor: 'pointer' }}
                onClick={() => handleServiceClick(service.id)}
              >
                <CardContent>
                  <ServiceImage src={service.image} alt={`${service.title} Image`} /> {/* Display the service image */}
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ textAlign: 'center', color: '#00bcd4' }}
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
          <Button
            variant="contained"
            sx={{ backgroundColor: '#00bcd4', mb: 3 }}
            onClick={() => setSelectedService(null)}
          >
            Back to Services
          </Button>
          {selectedService.component}
        </div>
      )}
    </div>
  );
}

export default Services;

