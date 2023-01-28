import styled, { css } from 'styled-components'
import { defaultTheme } from '../../../styles/theme'

const borderElements = css`
  border-radius: ${defaultTheme.sizes.borderRadius};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BorderRed = styled.div`
  border: 1px solid ${defaultTheme.colors.red};
  ${borderElements}
`
export const BorderOrange = styled.div`
  border: 1px solid ${defaultTheme.colors.orange};
  ${borderElements}
`
export const BorderYellow = styled.div`
  border: 1px solid ${defaultTheme.colors.yellow};
  ${borderElements}
`
