import { createGlobalStyle } from 'styled-components'
import 'antd/dist/antd.min.css'

import { Normalize } from './normalize'
import { AnimationStyles } from './animations'
import { FontsStyles } from './fonts'

export const GlobalStyles = createGlobalStyle`
  ${Normalize}
  ${FontsStyles}
  
  :root {
    --main-font: "Roboto", sans-serif;
    --text-font: "Merriweather", serif;
    --text-color: rgba(0, 0, 0, 0.85);
    --title-color: rgba(0, 0, 0, 1);
    --border-color: rgba(0, 0, 0, 0.05);
    --body-bg: #fff;
    --block-bg: #fff;
    --red: #ff4748;
    --green: #2e9e22;
    --blue: #157efb;
    --pad: 12;
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

  #root {
    min-height: 100vh;
    height: 100%;
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

  h2 {
    font-size: 2.4rem;
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
    color: var(--blue);
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

  ${AnimationStyles}
`
