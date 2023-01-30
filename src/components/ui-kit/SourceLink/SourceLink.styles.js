import styled from 'styled-components'
import { defaultTheme } from '../../../styles/theme'

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

export const SourceLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    ${Link} {
      color: ${defaultTheme.colors.blue};
      transition: 0.25s all;
    }

    svg:last-child {
      --icon-color: ${defaultTheme.colors.blue};
    }
  }
`
