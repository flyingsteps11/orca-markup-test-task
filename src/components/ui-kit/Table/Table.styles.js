import styled from 'styled-components'
import { defaultTheme } from '../../../styles/theme'
import { BorderOrange, BorderRed, BorderYellow } from '../IconWrapper/IconWrapper.style'
import { customScrollbar } from '../mixins/scrollbar'

export const StyledTable = styled.table`
  width: ${defaultTheme.sizes.full};
  border-collapse: separate;
  border-spacing: 0 8px;
`
export const TableTextGrey = styled.span`
  color: ${defaultTheme.colors.grey};
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
  &:not(:first-child) {
    padding-left: 21px;
    padding-right: 21px;
  }
`
export const TableBodyTr = styled.tr`
  background: ${defaultTheme.colors.white};
  border: inset 1px solid ${defaultTheme.colors.grey};
  border-radius: ${defaultTheme.sizes.borderRadius};

  &:hover {
    transition: 0.25s;
    background: ${defaultTheme.colors.dark};
    color: ${defaultTheme.colors.white};

    ${BorderOrange} {
      border: 1px solid ${defaultTheme.colors.white};
    }

    ${BorderYellow} {
      border: 1px solid ${defaultTheme.colors.white};
    }

    ${BorderRed} {
      border: 1px solid ${defaultTheme.colors.white};
    }

    ${TableTextGrey} {
      color: ${defaultTheme.colors.white};
    }

    svg {
      --icon-color: ${defaultTheme.colors.white};
    }
  }

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
  width: ${defaultTheme.sizes.full};
`
export const ExpandedTr = styled.tr``
export const ExpandedWrapper = styled.div`
  height: 208px;
  overflow: auto;
  padding: 32px 23px 24px 32px;

  ${customScrollbar}
`

export const ExpandedTd = styled.td`
  border: 1px solid ${defaultTheme.colors.grey};
  background: ${defaultTheme.colors.white};
  border-radius: 4px;
  position: relative;

  &:after {
    height: 100%;
    content: '';
    width: 1px;
    background: ${defaultTheme.colors.grey};
    position: absolute;
    right: 8px;
    top: 0;
  }
`
export const ExpandedText = styled.p`
  word-break: break-all;
  margin-top: 8px;
`
export const ExpandedTitle = styled.span`
  color: ${defaultTheme.colors.darkGrey};
`
export const ExpandedControlWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`
