import React from 'react';
import styled from 'styled-components';
// Assets
import HeaderImage from '../assets/header.avif'; // Correctly importing the image

export default function Header() {
  return (
    <Wrapper id="home" className="container flexCenter">
      <ContentWrapper>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="services" />
        </ImageWrapper>
        <TextWrapper>
          <h1 className="extraBold font60">Welcome to Flux Inc.</h1>
          <HeaderP className="font13 semiBold">
            Flux Inc. offers professionally developed tools and services for projects across Solana, changing how the ecosystem interacts.
          </HeaderP>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.section`
  padding: 60px 20px;
  width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121212;
  color: #fff;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Increased max-width for larger screens */
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;  /* Full width of the content wrapper */
  max-width: 1000px;  /* Limit the image size for larger screens */
  border-radius: 8px;

  @media (max-width: 1200px) {
    max-width: 800px;  /* Adjust for smaller screens */
  }

  @media (max-width: 768px) {
    max-width: 600px;  /* Mobile scaling */
  }

  @media (max-width: 480px) {
    max-width: 100%;  /* Full width on mobile */
  }
`;

const TextWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const HeaderP = styled.p`
  max-width: 600px;
  padding: 15px 0;
  line-height: 1.5rem;
  margin: 0 auto;
  text-align: center;
`;

