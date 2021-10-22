import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import CardContainer from './CardContainer';

const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
  max-width: 768px;
  min-height: 200px;
  border: 1px solid #ccc;
  border-radius: 17px;

  @media(min-width: 768px) {
    flex-direction: row;
    padding: 0;
    min-height: 200px;
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Avatar = styled.img`
  height: 250px;
  width: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  @media(min-width: 768px) {
    height: 220px;
    width: auto;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;

  @media(min-width: 600px) {
    width: 268px;
    height: 220px;
  }
`;

const InfoWrapper = styled.div`
  width: 100%;

  @media(min-width: 600px) {
    width: 500px;
  }
`;

function UserDetails(props) {
  const {
    user,
    listRepositories,
    listStarredRepositories
  } = props;

  return (
    <ContainerDetails>
      <DetailsWrapper>  
        <ImageWrapper>
          <Avatar src={user.avatar_url} alt="" />
        </ImageWrapper>
        <InfoWrapper>
          <div>
            <h3>Name: {user.name}</h3>
            <h4>User name: {user.login}</h4>
            <p>{user.bio}</p>
          </div>
        </InfoWrapper>
      </DetailsWrapper>
      <ButtonsWrapper>
        <Button 
          label='List Repositories' 
          onClick={listRepositories}
        />
        <Button 
          isSecondary 
          label='List Starred Repositories' 
          onClick={listStarredRepositories}
        />
      </ButtonsWrapper>
    </ContainerDetails>
  );
}

export default UserDetails;