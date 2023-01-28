import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './SourceLink.styles'
import { IconLink, IconScan } from '../../../assets/icons'

const SourceLink = ({ children }) => (
  <Wrapper>
    <IconScan />
    <span>{children}</span>
    <IconLink />
  </Wrapper>
)

SourceLink.propTypes = {
  children: PropTypes.node,
}

SourceLink.defaultProps = {
  children: null,
}

export default SourceLink
