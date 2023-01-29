import styled from 'styled-components'
import { defaultTheme } from '../../../styles/theme'

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
`
export const TableHeader = styled.thead``
export const TableBody = styled.tbody``
export const TableHeaderTr = styled.tr``
export const TableHeaderTh = styled.th`
  color: ${defaultTheme.colors.darkGrey};
  font-weight: normal;
  text-align: left;
  ${({ colOption }) =>
    colOption
      ? `
    min-width: ${colOption?.minWidth}px;
    width: ${colOption?.width}px;
    max-width: ${colOption?.maxWidth}px;`
      : ''}
`
export const TableBodyTr = styled.tr`
  background: ${defaultTheme.colors.white};
  border: inset 1px solid ${defaultTheme.colors.grey};
  border-radius: ${defaultTheme.sizes.borderRadius};

  &:last-child {
    margin-bottom: 0;
  }
`
export const TableBodyTd = styled.td`
  font-weight: normal;
  text-align: left;
  padding: 15px 0;
  border-top: 1px solid ${defaultTheme.colors.grey};
  border-bottom: 1px solid ${defaultTheme.colors.grey};

  ${({ colOption }) =>
    colOption
      ? `
    min-width: ${colOption?.minWidth}px;
    width: ${colOption?.width}px;
    max-width: ${colOption?.maxWidth}px;`
      : ''}
  &:not(:first-child) {
    padding-left: 21px;
    padding-right: 21px;
  }

  &:first-child {
    border-left: 1px solid ${defaultTheme.colors.grey};
    border-bottom-left-radius: ${defaultTheme.sizes.borderRadius};
    border-top-left-radius: ${defaultTheme.sizes.borderRadius};
    padding-left: 10px;
  }

  &:last-child {
    border-right: 1px solid ${defaultTheme.colors.grey};
    border-bottom-right-radius: ${defaultTheme.sizes.borderRadius};
    border-top-right-radius: ${defaultTheme.sizes.borderRadius};
  }
`
export const OverflowTable = styled.div`
  overflow-x: auto;
`
