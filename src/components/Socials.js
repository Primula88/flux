import React, { useState } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import styled from 'styled-components';

// Styled container for the FAQ section
const FaqContainer = styled.div`
  width: 75%;
  max-width: 100%;
  margin: 0 auto;
  background-color: #1e1e1e;
  border-radius: 12px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 2px 2px #64d9fb;
  overflow: hidden;
  color: #fff;
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

const FaqItem = styled.div`
  background-color: ${({ open }) => (open ? 'rgba(70, 68, 68, 0.8)' : '#2d2b2b')};
  transition: background-color 0.3s ease;
  margin: 0; /* Ensure no margin between items */
  border-bottom: 1px solid #3d3b3b; /* Add a thin border to distinguish items */
  
  &:last-child {
    border-bottom: none; /* Remove border from the last item */
  }
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
  padding: 10px 30px;
  background-color: ${({ open }) => (open ? '#3d3b3b' : '#2d2b2b')}; 
  transition: background-color 0.3s ease;
`;

const PlusMinus = styled.span`
  margin-right: 10px;
  font-size: 1.2em;
`;

const Answer = styled.div`
  font-size: 0.9em;
  max-height: ${({ open }) => (open ? '100px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: ${({ open }) => (open ? '10px 30px' : '0 30px')};
`;

const Title = styled.h1`
  color: #83d6f7; 
  text-align: center;
  margin-bottom: 20px;
`;

function Socials() {
  const [openFaqs, setOpenFaqs] = useState([]);

  const toggleFaq = (index) => {
    setOpenFaqs((prevOpenFaqs) =>
      prevOpenFaqs.includes(index)
        ? prevOpenFaqs.filter((i) => i !== index)
        : [...prevOpenFaqs, index]
    );
  };

  const faqData = [
    { question: 'What is Flux Inc?', answer: 'Flux Inc is a platform that...' },
    { question: 'How does staking work?', answer: 'Staking in Flux Inc allows you to...' },
    { question: 'What are Time Traveling Chimps?', answer: 'Time Traveling Chimps are...' },
    { question: 'How do I participate in the adventure?', answer: 'To participate in the adventure...' },
  ];

  return (
    <Container>
      {/* Twitter Embeds */}
      <Tweets>
        <h2>Latest Tweets</h2>
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

      {/* FAQ Title */}
      <Title>FAQ</Title>

      {/* FAQ Section */}
      <FaqContainer>
        {faqData.map((item, index) => (
          <FaqItem key={index} open={openFaqs.includes(index)}>
            <Question open={openFaqs.includes(index)} onClick={() => toggleFaq(index)}>
              <PlusMinus>{openFaqs.includes(index) ? '-' : '+'}</PlusMinus>
              {item.question}
            </Question>
            <Answer open={openFaqs.includes(index)}>
              <p>{item.answer}</p>
            </Answer>
          </FaqItem>
        ))}
      </FaqContainer>
    </Container>
  );
}

export default Socials;

