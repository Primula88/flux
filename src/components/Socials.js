import React, { useState } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import styled from 'styled-components';

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

const FaqSection = styled.div`
  width: 75%;
  max-width: 100%;
  margin: 0 auto;
`;

const FaqItem = styled.div`
  margin-bottom: 20px;
  background-color: ${({ open }) => (open ? '#2d2b2b' : 'transparent')};
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
  padding-left: 30px; /* Indented for center alignment */
`;

const PlusMinus = styled.span`
  margin-right: 10px;
  font-size: 1.2em;
`;

const Answer = styled.div`
  font-size: 0.9em;
  max-height: ${({ open }) => (open ? '100px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding-left: 30px; /* Align with the question */
`;

const Title = styled.h2`
  color: #83d6f7; /* Title color */
  text-align: center;
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
        <Title>Latest Tweets</Title>
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

      {/* FAQ Section */}
      <FaqSection>
        <Title>FAQ</Title>
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

