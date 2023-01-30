import styled from 'styled-components'
import { defaultTheme } from '../../../styles/theme'

export const DropDownContainer = styled('div')`
  position: relative;
`
export const DropDownHeader = styled('div')`
  padding: 6px 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  border: 1px solid ${defaultTheme.colors.grey};
  height: 30px;
  border-radius: ${defaultTheme.sizes.borderRadius};

  &:hover {
    transition: 0.25s all;
    border: 1px solid ${defaultTheme.colors.blue};

    svg {
      --icon-color: ${defaultTheme.colors.blue};
    }
  }
`
export const DropDownListContainer = styled('div')`
  position: absolute;
  top: 34px;
  right: 0;
  min-width: 122px;
  padding: 8px 16px;
  background: ${defaultTheme.colors.white};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`
export const DropDownList = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0;
`
export const ListItem = styled('li')`
  list-style: none;
  cursor: pointer;
  user-select: none;
`
