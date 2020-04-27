import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: Avenir-Regular;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
    font-family: Avenir-Regular;
  }

  p,
  label {
    font-family: Avenir-Regular;;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
