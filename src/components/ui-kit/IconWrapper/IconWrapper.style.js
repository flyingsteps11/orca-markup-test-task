import styled, { css } from 'styled-components'
import { defaultTheme } from '../../../styles/theme'

const borderElements = css`
  border-radius: ${defaultTheme.sizes.borderRadius};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
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
export const BorderGrey = styled.div`
  border: 1px solid ${defaultTheme.colors.grey};
  border-radius: ${defaultTheme.sizes.borderRadius};
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  margin-right: 4px;

  svg {
    width: 8px;
    height: 8px;
  }
`
const BackgroundIcon = css`
  border-radius: ${defaultTheme.sizes.borderRadius};
  width: 32px;
  height: 32px;
  margin: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
    --icon-color: ${defaultTheme.colors.white};
  }
`
export const BackgroundRed = styled.div`
  background: ${defaultTheme.colors.red};
  ${BackgroundIcon}
`
export const BackgroundOrange = styled.div`
  background: ${defaultTheme.colors.orange};
  ${BackgroundIcon}
`
export const BackgroundYellow = styled.div`
  background: ${defaultTheme.colors.yellow};
  ${BackgroundIcon}
`
