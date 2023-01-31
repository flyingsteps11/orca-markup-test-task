import React from 'react'
import { Container } from './Copyip.styles'
import { IconCopy } from '../../../assets/icons'

const CopyIp = ({ children }) => (
  <Container>
    <span>{children}</span>
    <IconCopy />
  </Container>
)

export default CopyIp
