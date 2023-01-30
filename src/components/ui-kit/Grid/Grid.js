import React from 'react'
import Card from '../Card/Card'
import { GridContainer } from './Grid.styles'

const Grid = ({ data }) => (
  <GridContainer>
    {data.map(item => (
      <Card item={item} />
    ))}
  </GridContainer>
)

export default Grid
