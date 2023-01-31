import styled from 'styled-components'
import { media } from '../ui-kit/mixins/media'
import { defaultTheme } from '../../styles/theme'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${defaultTheme.sizes.full};
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  ${media.md} {
    grid-template-columns: 1fr 1fr;
  }
`
