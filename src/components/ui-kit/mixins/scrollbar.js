import { css } from 'styled-components'

import { defaultTheme } from 'styles/theme'

export const customScrollbar = css`
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: ${defaultTheme.colors.white};
  }

  &::-webkit-scrollbar-thumb {
    background: ${defaultTheme.colors.grey};
  }
`
