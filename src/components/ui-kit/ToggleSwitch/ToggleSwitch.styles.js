import styled, { css } from 'styled-components'
import { IconToggleCard, IconToggleTable } from '../../../assets/icons'
import { defaultTheme } from '../../../styles/theme'

export const ToggleSwitchContainer = styled.div`
  padding: 1px;
  display: flex;
  align-items: center;
  gap: 3px;
  border: 1px solid ${defaultTheme.colors.grey};
  position: relative;
  cursor: pointer;
  border-radius: ${defaultTheme.sizes.borderRadius};
`
const DefaultBtn = css`
  width: 28px;
  height: 28px;
  border-radius: ${defaultTheme.sizes.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ToggleBtn = styled.div`
  &:hover {
    svg {
      --icon-color: ${defaultTheme.colors.blue};
    }
  }

  ${DefaultBtn}
`

export const StyledIconToggleTable = styled(IconToggleTable)`
  --icon-color: ${defaultTheme.colors.dark};
`
export const StyledIconToggleCard = styled(IconToggleCard)`
  --icon-color: ${defaultTheme.colors.dark};
`
export const ToggleBtnActive = styled.div`
  background-color: ${defaultTheme.colors.blue};
  ${DefaultBtn};
`
