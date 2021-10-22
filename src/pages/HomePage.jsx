import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import { Wrapper } from '../components/Header';
import CardContainer from '../components/CardContainer';
import { getUser } from '../api/user';
import Loading from '../components/Loading';

function HomePage(props) {
  const [ user, setUser ] = useState();
  const [ loading, setLoading ] = useState(false);

  const fetchUserData = async (userName) => {
    const response = await getUser(userName);
    setUser(response);
  }
  
  const handleFormSubmit = (userName) => {
    setLoading(true)
    
    setTimeout(() => {
      fetchUserData(userName);
      setLoading(false);
    }, 2000)
  }

  useEffect(() => {
  }, [])

  console.log(loading)
  return (
    <Wrapper>
      <Header title="Busca de usuários do github"/>
      <SearchBox onSubmit={handleFormSubmit}/>
      {user && <CardContainer user={user}/>}
      {loading && <Loading />}
    </Wrapper>
  );
}

export default HomePage;