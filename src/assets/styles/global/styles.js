
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background: #F2F2F2;
  }
  body html #root {
    height: 100%;
  }
`;