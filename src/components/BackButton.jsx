import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  text-decoration: none;
  color: black;
  cursor: pointer;
  padding: 0 24px;

  span {
    margin-left: 16px;
  }

  @media(min-width: 768px) {
    padding: 0;
  }
`; 

function BackButton(props) {
  return (
    <StyledButton to="/">
      <FaArrowLeft />
      <span>Home</span>
    </StyledButton>
  );
}

export default BackButton;