import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    font-size: 16px
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 40px auto;
    padding: 0;
    max-width: 480px;
    line-height: 1.6;
    color: #444;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  h1, h3 {
    text-align: center;
  }
  
  .wrapper {
    display: grid;
    grid-template-columns:  5fr 2fr 1fr;
    border: solid 1px;
    margin-bottom: 2px;
  }
  
  .complete {
    color: #c4c4c4 
  }
  
  .btn {
    background-color: #444;
    border: none; 
    color: white;
    padding: 12px 16px;
    font-size: 16px;
    cursor: pointer;
    margin-left: 1px;
  }
  
  .btn-complete {
    background-color: #c4c4c4;
    color: white; 
  }
  
  .btn-success {
    background-color: green;
  }
`;

export default GlobalStyle;
