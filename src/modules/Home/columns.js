import {
  BorderOrange,
  BorderRed,
  BorderYellow,
} from '../../components/ui-kit/IconWrapper/IconWrapper.style'
import { IconWarningOrange, IconWarningRed, IconWarningYellow } from '../../assets/icons'
import CopyIp from '../../components/ui-kit/CopyIp/Copyip'
import SourceLink from '../../components/ui-kit/SourceLink/SourceLink'
import React from 'react'
import { TableTextGrey } from '../../components/ui-kit/Table/Table.styles'

export const TableColumns = [
  {
    Header: '',
    accessor: 'icon',
    colOption: {
      minWidth: 76,
      maxWidth: 76,
      width: 76,
    },
    id: 'expander',
    Cell: ({ value }) => (
      <>
        {value === 0 && (
          <BorderRed>
            <IconWarningRed />
          </BorderRed>
        )}
        {value === 1 && (
          <BorderOrange>
            <IconWarningOrange />
          </BorderOrange>
        )}
        {value === 2 && (
          <BorderYellow>
            <IconWarningYellow />
          </BorderYellow>
        )}
      </>
    ),
  },
  {
    Header: 'Name',
    accessor: 'name',
    colOption: {
      minWidth: 154,
      maxWidth: 154,
      width: 154,
    },
  },
  {
    Header: 'File name',
    accessor: 'fileName',
    colOption: {
      minWidth: 217,
      maxWidth: 217,
      width: 217,
    },
    Cell: ({ value, row }) => (
      <span>
        {value} <TableTextGrey>({row.original.fileSize})</TableTextGrey>
      </span>
    ),
  },
  {
    Header: 'IP Address v4',
    accessor: 'ipV4',
    colOption: {
      minWidth: 217,
      maxWidth: 217,
      width: 217,
    },
    Cell: ({ row }) => <CopyIp children={row.original.ipV4} />,
  },
  {
    Header: 'IP Address v6',
    accessor: 'ipV6',
    colOption: {
      minWidth: 240,
      maxWidth: 240,
      width: 240,
    },
    Cell: ({ row }) => <CopyIp children={row.original.ipV6} />,
  },
  {
    Header: 'Scan source',
    accessor: 'scanSource',
    colOption: {
      minWidth: 317,
      maxWidth: 317,
      width: 317,
    },
    Cell: ({ row }) => <SourceLink children={row.original.scanSource} />,
  },
]
