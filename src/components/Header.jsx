import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 6%);
  background: white;
  padding: 0 24px;

  @media(min-widht: 600px) {
    padding: 0;
  }
`;

function Header(props) {
  const {
    title
  } = props;
  
  return (
    <HeaderContainer>
      <h1>{title}</h1>
    </HeaderContainer>
  );
}

export default Header;