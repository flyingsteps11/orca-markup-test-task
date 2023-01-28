import styled from 'styled-components'
import { defaultTheme } from '../../styles/theme'

export const ToolbarMain = styled.div`
  display: grid;
  grid-template-columns: 94px 1fr;
  grid-column-gap: 1rem;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid ${defaultTheme.colors.grey};
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`