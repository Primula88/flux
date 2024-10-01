import React, { useState } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px;
`;

const Tweets = styled.div`
  max-width: 100%;
`;

const FaqSection = styled.div`
  max-width: 100%;
`;

const FaqItem = styled.div`
  margin-bottom: 20px;
  background-color: ${({ open }) => (open ? '#2d2b2b' : 'transparent')}; /* Slightly lighter background */
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.2em; /* Larger question font */
  font-weight: bold;
`;

const PlusMinus = styled.span`
  margin-right: 10px; /* Move the + to the left */
  font-size: 1.2em;
`;

const Answer = styled.div`
  font-size: 0.9em; /* Smaller answer font */
  max-height: ${({ open }) => (open ? '100px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
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
      {/* Left side: Tweets */}
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

      {/* Right side: FAQ */}
      <FaqSection>
        <h2>FAQ</h2>
        {faqData.map((item, index) => (
          <FaqItem key={index} open={openFaqs.includes(index)}>
            <Question onClick={() => toggleFaq(index)}>
              <PlusMinus>{openFaqs.includes(index) ? '-' : '+'}</PlusMinus>
              {item.question}
            </Question>
            <Answer open={openFaqs.includes(index)}>
              <p>{item.answer}</p>
            </Answer>
          </FaqItem>
        ))}
      </FaqSection>
    </Container>
  );
}

export default Socials;

