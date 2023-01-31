import styled from 'styled-components'
import { defaultTheme } from '../../../styles/theme'
import { IconArrow } from '../../../assets/icons'

export const StyledDropdown = styled.div`
  position: relative;
`
export const DropdownHeader = styled.div`
  padding: 6px 8px;
  background: ${defaultTheme.colors.blue};
  color: ${defaultTheme.colors.white};
  display: flex;
  align-items: center;
  gap: 8px;
  height: 30px;
  --icon-color: ${defaultTheme.colors.white};
  border-radius: ${defaultTheme.sizes.borderRadius};
  cursor: pointer;
`
export const DropdownContainer = styled.div`
  position: absolute;
  top: 34px;
  width: ${defaultTheme.sizes.full};
  border-radius: 2px;
  box-shadow: ${defaultTheme.colors.boxShadow};
  background: ${defaultTheme.colors.white};
`
export const DropdownList = styled.ul`
  padding: 4px 0;
  margin: 0;
`
export const ListItem = styled.li`
  list-style-type: none;
  padding: 4px 16px;
  cursor: pointer;

  &:hover {
    transition: all 0.25s;
    background: ${defaultTheme.colors.wizardWhite};
    color: ${defaultTheme.colors.blue};
  }
`
export const StyledIconArrow = styled(IconArrow)`
  transition: all 0.25s;
  transform: ${props => (props.rotate ? `rotate(180deg)` : '')};
`
