import React from 'react'
import Card from '../Card/Card'

const Grid = ({ data }) => (
  <div>
    {data.map(item => (
      <Card item={item} />
    ))}
  </div>
)

export default Grid
