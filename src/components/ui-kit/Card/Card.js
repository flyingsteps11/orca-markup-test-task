import React from 'react'

const Card = ({ item }) => (
  <div>
    <div>{item.name}</div>
    <div>{item.icon}</div>
  </div>
)

export default Card
