import styled from 'styled-components'
import { media } from '../mixins/media'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  ${media.md} {
    grid-template-columns: 1fr 1fr;
  }
`
