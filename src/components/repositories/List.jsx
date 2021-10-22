import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const RepositoriesList = styled.ul`
  width: 100%;  
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
  
  @media(min-width: 768px) {
    width: 50%;
    padding: 0;
  }
`;

function List(props) {
  const {
    repositories
  } = props;

  return (
    <ListContainer>
      <RepositoriesList>
        {repositories?.map((repository) => {
          return (
            <ListItem 
              key={repository.id} 
              repository={repository} 
            />
          )
        })}
      </RepositoriesList>
    </ListContainer>
  );
}

export default List;