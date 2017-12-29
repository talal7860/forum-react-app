import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 14px;
  }

  .btn-primary {
    background-color: #1abc9c;
    box-shadow: none;
    border-radius: 2px;
    padding: 10px 15px;
    color: #ffffff;
    font-size: 14px;
    font-family: 'Open Sans Bold', sans-serif;
    border: none;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  @media (min-width: 1201px) {
    .container {
      padding: 0;
    }
    .container-fluid {
      padding: 0;
    }
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .green {
    background-color: #80d3ab;
  }
`;
