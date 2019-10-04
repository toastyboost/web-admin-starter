import { css } from 'styled-components'

export const Normalize = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden],
  template {
    display: none;
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-focus-ring-color: rgba(255, 255, 255, 0);
    cursor: default;
  }

  body {
    font-size: 100%;
    line-height: 1;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a {
    background: transparent;
  }

  *:focus,
  *:active,
  *:hover {
    outline: none;
  }

  hr {
    box-sizing: content-box;
    height: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  pre {
    white-space: pre-wrap;
    tab-size: 4;
  }

  img {
    border: none;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  button,
  input {
    line-height: normal;
  }
  button,
  select {
    text-transform: none;
  }
  button {
    overflow: visible;
  }
  button,
  html input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    cursor: pointer;
    -webkit-appearance: button;
  }
  button[disabled],
  html input[disabled] {
    cursor: default;
  }
  input[type='checkbox'],
  input[type='radio'] {
    box-sizing: border-box;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  input[type='search'] {
    box-sizing: content-box;
    -webkit-appearance: textfield;
  }
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    padding: 0;
    border: none;
  }
  textarea {
    overflow: auto;
    vertical-align: top;
  }
  button,
  input,
  select[multiple],
  textarea {
    background-image: none;
  }
  input,
  select,
  textarea {
    border-radius: 0;
    box-shadow: none;
  }
  input,
  textarea {
    user-select: text;
    resize: none;
  }

  [placeholder]:focus::placeholder {
    color: transparent;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
`
