import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: Avenir-Regular;
    background-color: #fff;
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

  .MuiButton-containedPrimary{
      background-color: #2ca01c !important;
    }

  a {
    text-decoration: none;
  }  

`;

export default GlobalStyle;
