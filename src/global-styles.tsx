import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    font-size: 16px
  }

  body {
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: #444;
  }

  #root {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 15px;
  }
`;

export default GlobalStyle;
