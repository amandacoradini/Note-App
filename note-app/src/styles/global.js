import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 75%;
  }

@media screen and (min-width: 1400px) {
  html {
    font-size: 100%;
    scroll-behavior: smooth;
  }
}

  body {
    -webkit-font-smoothing: antialised;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
  }

  #root {
    margin: 0 auto;
    background: ${theme.background};
  }

  button{
    cursor: pointer
  }
`
