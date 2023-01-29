import React from 'react'
import PropTypes from 'prop-types'
import { Link, Wrapper } from './SourceLink.styles'
import { IconLink, IconScan } from '../../../assets/icons'

const SourceLink = ({ children }) => (
  <Wrapper>
    <IconScan />
    <Link href="#">{children}</Link>
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
