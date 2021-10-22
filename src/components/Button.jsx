import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: ${props => props.isSecondary ? '1px solid black' : "none"};
  padding: 12px;
  background: ${props => props.isSecondary ? 'transparent' : "black"};
  color: ${props => props.isSecondary ? 'black' : "white"};
  border-radius: 4px;
  margin-right: 11px;
  cursor: pointer
`;

function Button(props) {
  const {
    label,
    onClick,
    isSecondary,
    type
  } = props;

  return (
    <StyledButton 
      isSecondary={isSecondary} 
      onClick={onClick}
      type={type}
    >
      {label}
    </StyledButton>
  );
}

export default Button;

