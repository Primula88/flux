import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import styled, { createGlobalStyle } from 'styled-components';
import BebasNeueFont from '../assets/font/BebasNeue-Regular.ttf'; // Import Bebas Neue font

// Global font styles
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bebas Neue';
    src: url(${BebasNeueFont}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  
  body {
    font-family: 'Bebas Neue', sans-serif;
  }
`;


// Main container for Tweets and FAQ
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px;
`;

const Tweets = styled.div`
  width: 75%;
  max-width: 100%;
  margin: 0 auto;
`;


const CustomHeaderTypography = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  color: white;
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;

  @media (min-width: 960px) {
    font-size: 3rem;
    font-weight: 300;
  }
`;

function Socials() {
  return (
    <>
      <GlobalStyle />
      <Container>
        {/* Twitter Embeds */}
        <Tweets>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="FluxInc_"
            options={{ height: 400, theme: 'dark' }}
          />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="TimeTravelingChimps"
            options={{ height: 400, theme: 'dark' }}
          />
        </Tweets>

      </Container>
    </>
  );
}

export default Socials;

