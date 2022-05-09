import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #fff;
}

body {
  background-color: #000814;
}

.coin_app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  color: #fff;
}

/* Layout CSS */
.layout {
  height: 100%;
  width: 100%;
}

`;
 