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
} from './Table.styles'

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
                {/*
                    If the row is in an expanded state, render a row with a
                    column that fills the entire length of the table.
                  */}
                {row.isExpanded ? (
                  <TableBodyTr>
                    <TableBodyTd colSpan={visibleColumns.length}>
                      <span>{row.original.additionalInfo}</span>
                    </TableBodyTd>
                  </TableBodyTr>
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
