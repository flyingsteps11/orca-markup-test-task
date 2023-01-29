import React from 'react'
import { Page } from '../../components/Page/Page.styles'
import Table from '../../components/ui-kit/Table/Table'
import { IconWarningOrange, IconWarningRed, IconWarningYellow } from '../../assets/icons'
import Toolbar from '../../components/Toobar/Toolbar'
import {
  BorderOrange,
  BorderRed,
  BorderYellow,
} from '../../components/ui-kit/IconWrapper/IconWrapper.style'
import Copyip from '../../components/ui-kit/CopyIp/Copyip'
import SourceLink from '../../components/ui-kit/SourceLink/SourceLink'
import { data } from './data'
import Grid from '../../components/ui-kit/Grid/Grid'

const Home = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: '',
        accessor: 'icon',
        colOption: {
          minWidth: 50,
          maxWidth: 50,
          width: 50,
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
            {value} ({row.original.fileSize})
          </span>
        ),
      },
      {
        Header: 'IP Address v4',
        accessor: 'ipV4',
        colOption: {
          minWidth: 208,
          maxWidth: 208,
          width: 208,
        },
        Cell: ({ row }) => <Copyip children={row.original.ipV4} />,
      },
      {
        Header: 'IP Address v6',
        accessor: 'ipV6',
        colOption: {
          minWidth: 240,
          maxWidth: 240,
          width: 240,
        },
        Cell: ({ row }) => <Copyip children={row.original.ipV6} />,
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
    ],
    [],
  )

  return (
    <Page>
      <Toolbar />
      <Table columns={columns} data={data} />
      <Grid data={data} />
    </Page>
  )
}

export default Home
