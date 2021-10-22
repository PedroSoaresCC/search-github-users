import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Wrapper } from '../components/Header';
import styled from 'styled-components';
import Header from '../components/Header';
import UserDetails from '../components/UserDetails';
import List from '../components/repositories/List';
import { getUser, getRepositories, getStarredRepositories} from '../api/user';
import BackButton from '../components/BackButton';

const Subtitle = styled.h3`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

function Details(props) {
  const { userName } = useParams();
  const [ user, setUser ] = useState();
  const [ repositories, setRepo ] = useState([]);
  const [ title, setTitle ] = useState();

  const fetchUserData = async () => {
    const response = await getUser(userName)
    setUser(response)
  }

  const ListRepositories = async () => {
    setTitle('Repositories')
    const response = await getRepositories(userName)
    setRepo(response)
  }

  const ListStarredRepositories = async () => {
    setTitle('List Starred Repositories')
    const response = await getStarredRepositories(userName)
    setRepo(response)
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  useEffect(() => {
    fetchUserData();
  }, [userName])

  return (
    <Wrapper>
      <Header title="Detalhes do Usuário"/>
      <BackButton />
      {user &&  
        <UserDetails
          user={user}
          repositories={repositories}
          listRepositories={ListRepositories}
          listStarredRepositories={ListStarredRepositories}
        />
      }
      <Subtitle>{title}</Subtitle>
      <List repositories={repositories}/>
    </Wrapper>
  );
}

export default Details;