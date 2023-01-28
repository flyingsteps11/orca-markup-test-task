import styled from 'styled-components'
import { defaultTheme } from '../../../styles/theme'

export const Wrapper = styled.button`
  padding: 6px 8px;
  border-radius: ${defaultTheme.sizes.borderRadius};
  background: ${({ primary }) => (primary ? defaultTheme.colors.blue : defaultTheme.colors.white)};
  color: ${({ primary }) => (primary ? defaultTheme.colors.white : defaultTheme.colors.dark)};
  border: ${({ primary }) => (primary ? 'none' : defaultTheme.colors.grey)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
`
