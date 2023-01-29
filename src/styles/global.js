import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { fontFaces } from './fonts'
import { defaultTheme } from './theme'

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${fontFaces}
  html {
    font-size: ${defaultTheme.sizes.fontSize};
    line-height: ${defaultTheme.sizes.lineHeight};
  }

  body {
    font-family: ${defaultTheme.fontFamily.mulish};
    background: ${defaultTheme.colors.ghostWhite};
    color: ${defaultTheme.colors.dark};
    overflow-x: hidden;
    font-style: normal;
    font-weight: 400;
  }

  #root {
    min-height: 100vh;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  input, textarea {
    appearance: none;
  }

  p, h1, h2, h3, h4 {
    margin: 0;
  }

  textarea {
    resize: none;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  
  [class^="icon-"], [class*=" icon-"] {
    display: inline-block;
    vertical-align: middle;
  }
`
