import styled from 'styled-components'
import { defaultTheme } from '../../../styles/theme'

export const Container = styled.div`
  padding: 4px 8px;
  border-radius: ${defaultTheme.sizes.borderRadius};
  border: 1px solid ${defaultTheme.colors.grey};
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;

  span {
    white-space: nowrap;
    overflow: hidden;
    max-width: 164px;
    text-overflow: ellipsis;
  }
`
