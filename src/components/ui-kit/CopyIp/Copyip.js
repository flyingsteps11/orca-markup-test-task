import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './Copyip.styles'
import { IconCopy } from '../../../assets/icons'

const CopyIp = ({ children }) => (
  <Container>
    <span>{children}</span>
    <IconCopy />
  </Container>
)

CopyIp.propTypes = {
  children: PropTypes.node,
}

CopyIp.defaultProps = {
  children: null,
}

export default CopyIp
