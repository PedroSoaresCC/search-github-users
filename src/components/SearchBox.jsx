import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;

  @media(min-width: 768px) {
    width: 40%
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 0 24px;

  @media(min-widht: 600px) {
    padding: 0;
  }
`;


const Input = styled.input`
  width: 80%;
  padding: 0 16px;
  height: 40px;
  margin-right: 10px;
  border-radius: 4px;
`;

function SearchBox(props) {
  const {
    onSubmit
  } = props;

  const submit = (event) => {
    event.preventDefault();
    onSubmit(event.target.name.value)
  }

  return (
    <StyledDiv>
      <Form onSubmit={((event) => submit(event))}>
        <Input 
          name="name" 
          placeholder="Search for a github user" 
        />
        <Button
          type="submit" 
          label="Pesquisar">
        </Button>
      </Form>
    </StyledDiv>
  );
}

export default SearchBox;