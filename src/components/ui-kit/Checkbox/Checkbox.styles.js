import styled from 'styled-components'
import { defaultTheme } from '../../../styles/theme'

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
`

export const CheckboxDisplay = styled.div``
export const CheckboxText = styled.div``

export const CheckboxInput = styled.input.attrs(props => ({
  type: 'checkbox',
  ...props,
}))`
  display: none;

  & + ${CheckboxDisplay} {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${defaultTheme.colors.grey};
  }

  &:checked + ${CheckboxDisplay} {
    background: ${defaultTheme.colors.blue};
    border: none;
  }

  &:hover + ${CheckboxDisplay} {
    border: 1px solid ${defaultTheme.colors.blue};
    transition: all 0.25s;
  }
`
