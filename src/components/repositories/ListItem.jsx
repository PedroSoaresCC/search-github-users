import React from 'react';
import styled from 'styled-components';
import { FaCodeBranch, FaStar, FaRegEye } from 'react-icons/fa'

const Item = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 24px;
  margin-bottom: 8px;
  justify-content: space-between;
  text-decoration: none;
  color: black;

  .name {
    font-size: 16px;
    margin: 0;
    margin-bottom: 16px;
  }

  @media(min-width: 768px) {
    flex-direction: row;

    .name {
      margin-bottom: 0;
    }
  }
`;

const Tag = styled.span`
  padding: 8px 20px;
  border: 1px solid black;
  color: black;
  margin-right: 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

function ListItem(props) {
  const {
    repository
  } = props;

  return (
    <Item href={repository.svn_url} target='_blank'>
      <span className="name">{repository.name}</span>
      <TagsWrapper>
        <Tag><FaRegEye /> {repository.watchers}</Tag>
        <Tag><FaCodeBranch /> {repository.forks}</Tag>
        <Tag><FaStar /> {repository.stargazers_count}</Tag>
      </TagsWrapper>
    </Item>
  );
}

export default ListItem;