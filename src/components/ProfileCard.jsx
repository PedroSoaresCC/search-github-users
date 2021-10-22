import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 20px 16px;
  box-sizing: border-box;
  text-decoration: none;
  color: black; 
  border-radius: 4px;

  @media(min-width: 768px) {
    width: 40%;
  }

  .user-info {
    font-size: 16px;
    font-weight: bold;
  }

  .user {
    display: flex;

    &-image {
      height: 100px;
      width: 100px;
      border-radius: 50%;
    }

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 40px;

      > span {
        margin-bottom: 8px;
      }
    }

    &-description {
      font-size: 14px;
      margin-top: 24px;
      margin-bottom: 0
    }
  }
`;

function ProfileCard(props) {
  const {
    user
  } = props;
  
  return (
    <Card to={`/${user.login}`}>
      <div className="user">
        <img className="user-image" src={user.avatar_url} alt="" />
        <div className="user-info">
          <span>{user.name}</span>
          <span>{user.login}</span>
        </div>
      </div>
      <p className="user-description">{user.bio}</p>
    </Card>
  );
}

export default ProfileCard;