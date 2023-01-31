import { css } from 'styled-components'

import { defaultTheme } from 'styles/theme'

export const customScrollbar = css`
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${defaultTheme.colors.white};
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${defaultTheme.colors.scroll};
    border-radius: 100px;
  }
`
