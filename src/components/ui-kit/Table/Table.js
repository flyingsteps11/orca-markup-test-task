import React from 'react'

import { useTable, useExpanded } from 'react-table'
import {
  StyledTable,
  TableBody,
  TableBodyTr,
  TableBodyTd,
  TableHeader,
  TableHeaderTh,
  TableHeaderTr,
  OverflowTable,
  ExpandedTr,
  ExpandedTd,
  ExpandedTitle,
  ExpandedText,
  ExpandedControlWrapper,
  ExpandedWrapper,
} from './Table.styles'
import Button from '../Button/Button'
import Dropdown from '../Dropdown/Dropdown'

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, visibleColumns } =
    useTable(
      {
        columns,
        data,
      },
      useExpanded,
    )

  return (
    <OverflowTable>
      <StyledTable {...getTableProps()}>
        <TableHeader>
          {headerGroups.map(headerGroup => (
            <TableHeaderTr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableHeaderTh colOption={column.colOption} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </TableHeaderTh>
              ))}
            </TableHeaderTr>
          ))}
        </TableHeader>
        <TableBody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <React.Fragment {...row.getRowProps()}>
                <TableBodyTr {...row.getToggleRowExpandedProps()}>
                  {row.cells.map(cell => {
                    return (
                      <TableBodyTd colOption={cell.column.colOption} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </TableBodyTd>
                    )
                  })}
                </TableBodyTr>

                {row.isExpanded ? (
                  <ExpandedTr>
                    <ExpandedTd colSpan={visibleColumns.length}>
                      <ExpandedWrapper>
                        <ExpandedTitle>Additional info</ExpandedTitle>
                        <ExpandedText>{row.original.additionalInfo}</ExpandedText>
                        <ExpandedControlWrapper>
                          <Button primary>Download</Button>
                          <Dropdown />
                        </ExpandedControlWrapper>
                      </ExpandedWrapper>
                    </ExpandedTd>
                  </ExpandedTr>
                ) : null}
              </React.Fragment>
            )
          })}
        </TableBody>
      </StyledTable>
    </OverflowTable>
  )
}

export default Table
