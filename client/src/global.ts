import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;    
    position:fixed
    overflow-y:scroll;
  }



  *, *::after, *::before {
    box-sizing: border-box;
  }

  *,*:focus,*:hover{
    outline:none;
}

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
 
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
  }

  img {
    border-radius: 5px;
    height: auto;
    
  }

  div {
    text-align: center;
  }

  small {
    display: block;
  }

  a {
  
    text-decoration: none;
  }

  
`;
