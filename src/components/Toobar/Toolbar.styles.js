import styled from 'styled-components'
import { defaultTheme } from '../../styles/theme'
import { media } from '../ui-kit/mixins/media'

export const ToolbarMain = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 1rem;
  width: ${defaultTheme.sizes.full};
  padding-bottom: 16px;
  border-bottom: 1px solid ${defaultTheme.colors.grey};
  margin-bottom: 21px;

  ${media.md} {
    grid-template-columns: 94px 1fr;
  }
`
export const ToolbarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 16px;

  ${media.smXl} {
    align-items: center;
    justify-content: flex-end;
  }

  ${media.md} {
    padding-top: 8px;
  }
`
export const LinkLogo = styled.a`
  margin: 0 auto;

  ${media.md} {
    margin: 0;
  }
`
