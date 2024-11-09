import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Staking from './Staking';
import TraitSwapping from './TraitSwapping';
import Adventure from './Adventure';
import Fluxtility from './Fluxtility';
import PlusIcon from '../assets/plus.webp';
import MinusIcon from '../assets/minus.webp';
import BebasNeueFont from '../assets/font/BebasNeue-Regular.ttf'; // Import Bebas Neue font
import AkiraFont from '../assets/font/AkiraExpandedDemo.otf'; // Import Akira font

// Custom font-face for Bebas Neue
const CustomHeaderTypography = styled(Typography)`
  @font-face {
    font-family: 'Bebas Neue';
    src: url(${BebasNeueFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'Bebas Neue', sans-serif;
  color: white;
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;

  @media (min-width: 960px) {
    font-size: 3rem;
  }
`;

// Custom font-face for Akira font
const CustomTypography = styled(Typography)`
  @font-face {
    font-family: 'Akira';
    src: url(${AkiraFont}) format('opentype');
    font-weight: normal;
    font-style: normal;
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

// Wrapper to center the links while keeping the text aligned left on desktop
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

// Full width container for the component that expands (Desktop)
const ActiveServiceContainer = styled('div')`
  width: 110%;
background-color: transparent;
  margin: 20px auto 0 auto;
  border-radius: 12px;
`;

// Wrapper for the expanding content
const ExpandingContent = styled('div')`
  padding: 40px;
`;

// Styled grid for desktop layout with a single row
const ServicesGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding-top: 50px;

  @media (max-width: 960px) {
    padding-top: 0px;
    flex-direction: column; /* Ensures mobile view is one column */
  }
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
  const [activeService, setActiveService] = useState('staking'); // Set 'staking' as default active service
  const isDesktop = window.innerWidth >= 960;

  const handleServiceClick = (serviceId) => {
    setActiveService((prevService) => (prevService === serviceId ? null : serviceId));
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Header Title */}
      <CustomHeaderTypography variant="h2">
        SERVICES WE OFFER
      </CustomHeaderTypography>
      <CenteredContainer container>
        <Grid item xs={12} md={10}>
          {/* Services Grid */}
          <ServicesGrid>
            {servicesList.map((service) => (
              <div key={service.id} style={{ width: isDesktop ? 'auto' : '100%' }}>
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

          {/* Desktop only: Open service content in a separate 70% div centered below the links */}
          {isDesktop && activeService && (
            <ActiveServiceContainer>
              <ExpandingContent>
                {servicesList.find((service) => service.id === activeService)?.component}
              </ExpandingContent>
            </ActiveServiceContainer>
          )}
        </Grid>
      </CenteredContainer>
    </div>
  );
}


export default Services;

