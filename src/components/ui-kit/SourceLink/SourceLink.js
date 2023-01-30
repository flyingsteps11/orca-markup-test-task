import React from 'react'
import PropTypes from 'prop-types'
import { Link, SourceLinkWrapper } from './SourceLink.styles'
import { IconLink, IconScan } from '../../../assets/icons'

const SourceLink = ({ children }) => (
  <SourceLinkWrapper>
    <IconScan />
    <Link href="#">{children}</Link>
    <IconLink />
  </SourceLinkWrapper>
)

SourceLink.propTypes = {
  children: PropTypes.node,
}

SourceLink.defaultProps = {
  children: null,
}

export default SourceLink
