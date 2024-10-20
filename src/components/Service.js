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
  font-size: 1.5rem;

  @media (min-width: 960px) {
    font-size: 2rem;
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
  align-items: center;
  gap: 15px;
`;

// Styled for image icon
const IconImage = styled('img')`
  margin-right: 10px;
  width: 30px;
  height: 30px;

  @media (min-width: 960px) {
    width: 40px;
    height: 40px;
  }
`;

// Full width container for the component that expands
const FullWidthContainer = styled('div')(({ theme }) => ({
  width: '90%',  // Set the container width to 90% for more space
  marginTop: '20px',
  backgroundColor: '#1e1e1e',
  borderRadius: '12px',
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.05), 0 2px 2px #64d9fb',
  color: '#fff',
  overflow: 'hidden',
  transition: 'max-height 0.5s ease, width 0.5s ease',  // Added width transition
  maxHeight: '0',
  [theme.breakpoints.down('sm')]: {
    width: '100%',  // Full width on mobile
  },
}));

// Wrapper for the expanding content
const ExpandingContent = styled('div')`
  padding: ${({ theme }) => theme.spacing(4)};
`;

// Styled grid for desktop layout with 2 rows of 2 columns
const ServicesGrid = styled(Grid)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;

  @media (max-width: 960px) {
    grid-template-columns: 1fr; /* Ensures mobile view is one column */
  }
`;

// Middle row for the desktop layout
const MiddleRow = styled('div')`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  position: relative;  // Ensures content opens under titles
`;

// A dedicated container for the services content on mobile
const MobileFullWidthContainer = styled('div')`
  width: 100%;
  margin-top: 20px;
  overflow: hidden; /* Ensures no overflow on mobile */
  max-height: ${({ isOpen }) => (isOpen ? '100%' : '0')}; /* Dynamically handles the content height */
  transition: max-height 0.5s ease;
`;

const servicesList = [
  { id: 'staking', title: 'Staking', component: <Staking /> },
  { id: 'adventure', title: 'Adventure', component: <Adventure /> },
  { id: 'trait-swapping', title: 'TraitSwap', component: <TraitSwapping /> },
  { id: 'fluxtility', title: 'Fluxtility', component: <Fluxtility /> },
];

function Services() {
  const [activeService, setActiveService] = useState(null);
  const isDesktop = window.innerWidth >= 960;

  const handleServiceClick = (serviceId) => {
    setActiveService((prevService) => (prevService === serviceId ? null : serviceId));
  };

  return (
    <div style={{ padding: '20px' }}>
      <CenteredContainer container>
        <Grid item xs={12} md={10}>
          <ServicesGrid>
            {servicesList.map((service) => (
              <div key={service.id} style={{ width: '100%' }}>
                <div onClick={() => handleServiceClick(service.id)}>
                  <CustomTypography variant="h4">
                    <IconImage
                      src={activeService === service.id ? MinusIcon : PlusIcon}
                      alt="Toggle"
                    />
                    {service.title}
                  </CustomTypography>
                </div>

                {/* Mobile only: Open card content in 1 column */}
                {!isDesktop && (
                  <MobileFullWidthContainer
                    isOpen={activeService === service.id} // Open the content only when active
                  >
                    {activeService === service.id && (
                      <ExpandingContent>
                        {service.component}
                      </ExpandingContent>
                    )}
                  </MobileFullWidthContainer>
                )}
              </div>
            ))}
          </ServicesGrid>

          {/* Middle row where content opens (only for desktop) */}
          {isDesktop && activeService && (
            <MiddleRow>
              <FullWidthContainer style={{ maxHeight: '1000px', width: '90%' }}>
                {servicesList.find((service) => service.id === activeService)?.component}
              </FullWidthContainer>
            </MiddleRow>
          )}
        </Grid>
      </CenteredContainer>
    </div>
  );
}

export default Services;

