import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  max-width: 768px;
  margin: 40px auto;
`;

function Loading(props) {
  return (
    <LoadingWrapper>
      <Skeleton height={220} width={768} marginTop={50}/>
    </LoadingWrapper>
  );
}

export default Loading;