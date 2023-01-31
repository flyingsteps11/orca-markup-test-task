import React, { useState } from 'react'
import { Page } from '../../components/ui-kit/Page/Page.styles'
import Table from '../../components/Table/Table'
import Toolbar from '../../components/Toobar/Toolbar'
import { data } from './data'
import Grid from '../../components/Grid/Grid'
import { TableColumns } from './columns'

const Home = () => {
  const [isTableVisible, setTableVisible] = useState(true)
  const columns = React.useMemo(() => TableColumns, [])

  return (
    <Page>
      <Toolbar isTableVisible={isTableVisible} setTableVisible={setTableVisible} />
      {isTableVisible ? <Table columns={columns} data={data} /> : <Grid data={data} />}
    </Page>
  )
}

export default Home
