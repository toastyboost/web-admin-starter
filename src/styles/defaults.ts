import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import 'antd/dist/antd.min.css';

export const GenericStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap');
  
  ${normalize}
   
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --main-font: 'Roboto', sans-serif;
    --title-font: 'Merriweather', serif;
    --primary: #fff;
    --secondary: #fff;
    --warning: #fff;
    --highlight: #f3f8fe;
    --text-color: rgba(40, 46, 52, 0.8);
    --text-color--secondary: rgba(56, 56, 56, 0.6);
    --title-color: rgba(0, 0, 0, 1);
    --link-active: #03a9f4;
    --link-hover: #2196f3;
    --border-color: rgba(0, 0, 0, 0.05);
    --body-bg: #fff;
    --block-bg: #fff;
    --red: #ff4748;
    --green: #2e9e22;
    --blue: #157efb;
    --box-shadow: 0 2px 6px 4px rgba(0, 0, 0, 0.03);
  }

  body,
  html {
    font-family: var(--main-font);
    color: var(--text-color);
    background-color: var(--bg-color);
    font-size: 62.5%;
    line-height: 1.4;
    font-weight: 400;
    min-width: 320px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  section {
    font-size: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--main-font);
    line-height: 1.1;
    color: var(--text-color);
  }

  p {
    font-family: var(--text-font);
  }

  button {
    border: 0;
  }

  input {
    border: 0;
  }

  a {
    border: 0;
    transition: 0.2s;
    text-decoration: none;
    color: var(--black);
  }

  a:visited,
  a:focus,
  a:active,
  a:hover {
    outline: 0 none;
  }

  img {
    border: 0;
  }

  menu,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  section,
  header,
  footer {
    font-size: 1.6rem;
  }
`;
