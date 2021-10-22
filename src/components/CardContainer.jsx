import React from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  padding: 0 24px;

  @media(min-widht: 600px) {
    padding: 0;
  }
`;

function CardContainer(props) {
  const {
    user
  } = props;

  return (
    <Container>
      <ProfileCard user={user} />
    </Container>
  );
}

export default CardContainer;