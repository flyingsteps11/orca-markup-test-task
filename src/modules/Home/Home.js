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
import Button from '../../components/ui-kit/Button/Button'
import Modal from '../../components/ui-kit/Modal/Modal'

const Home = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: '',
        accessor: 'icon',
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
      },
      {
        Header: 'File name',
        accessor: 'fileName',
        Cell: ({ value, row }) => (
          <span>
            {value} ({row.original.fileSize})
          </span>
        ),
      },
      {
        Header: 'IP Address v4',
        accessor: 'ipV4',
        Cell: ({ row }) => <Copyip children={row.original.ipV4} />,
      },
      {
        Header: 'IP Address v6',
        accessor: 'ipV6',
        Cell: ({ row }) => <Copyip children={row.original.ipV6} />,
      },
      {
        Header: 'Scan source',
        accessor: 'scanSource',
        Cell: ({ row }) => <SourceLink children={row.original.scanSource} />,
      },
    ],
    [],
  )

  const data = [
    {
      icon: 0,
      name: 'Luctus',
      fileName: 'Luctus.ppt',
      fileSize: '2Mb',
      ipV4: '38.21.46.43/5',
      ipV6: '2855:93c2:2469:6cde:643b:e139:6aae:6e00',
      scanSource: 'https://dropbox.com/nulla/dapibus.xml',
    },
    {
      icon: 1,
      name: 'Ante',
      fileName: 'Ante.tiff',
      fileSize: '10Mb',
      ipV4: '75.128.66.66/28',
      ipV6: 'efcd:8153:a72c:7e0e:4200:896d:74d:bac1',
      scanSource: 'https://ow.ly/curae.aspx',
    },
    {
      icon: 1,
      name: 'ElitProinInterdum',
      fileName: 'ElitProinInterdum.xls',
      fileSize: '3Mb',
      ipV4: '204.200.5.2/1',
      ipV6: 'a454:1732:7eeb:b137:a1d:9d52:813b:506e',
      scanSource: 'http://google.com/sit.aspx',
    },
    {
      icon: 2,
      name: 'Non',
      fileName: 'Non.ppt',
      fileSize: '536Kb',
      ipV4: '127.234.110.193/28',
      ipV6: 'efcd:8153:a72c:7e0e:4200:896d:74d:bac1',
      scanSource: 'http://hex.com/pede.json',
    },
  ]
  return (
    <Page>
      <Toolbar />
      <Table columns={columns} data={data} />
      <Button>1321321</Button>
    </Page>
  )
}

export default Home
