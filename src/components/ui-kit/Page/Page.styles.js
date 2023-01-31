import styled from 'styled-components'
import { defaultTheme } from '../../../styles/theme'
import { media } from '../mixins/media'

export const Page = styled.div`
  max-width: 1256px;
  padding: 16px;
  width: ${defaultTheme.sizes.full};
  margin: 0 auto;

  ${media.lg} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: inherit;
    padding: 0 16px;
  }
`
