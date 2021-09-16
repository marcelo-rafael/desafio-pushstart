import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {

    /*========== Colors ==========*/
    --header-color: #7342AA;
    --footer-color: #66899B;
    --body-color: #ffffff;

    --button-color: #743DAB;
    --feedback-color: #5EB891;

    --input-color: #E2E2E2;
    --text-placeholder-color: #7E7E7E;


    --primary-title-color: #ffffff;
    --secondary-title-color: #343434;

    --primary-text-color: #D9DADB;
    --secondary-text-color: #656565;

    --primary-progress-color: #DBDBDB,
    --secondary-progress-color: #743DAB,
  }

  /*========== Font and typography ==========*/
    --body-font: 'Roboto', sans-serif;

    /* .5rem = 8px, 1rem = 16px, 1.5rem = 24px ... */
    --big-font-size: 2rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: .938rem;
    --small-font-size: .813rem;
    --smaller-font-size: .75rem;

    /*========== z index ==========*/
    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;

    /*==================== BASE ====================*/
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
}

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  } 

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`