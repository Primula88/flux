import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #ff4500;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff6500;
  }
`;

export default function FullButton({ title }) {
  return <Button>{title}</Button>;
}

