import React from 'react'
import { Link, SourceLinkWrapper } from './SourceLink.styles'
import { IconLink, IconScan } from '../../../assets/icons'

const SourceLink = ({ children }) => (
  <SourceLinkWrapper>
    <IconScan />
    <Link href="#">{children}</Link>
    <IconLink />
  </SourceLinkWrapper>
)

export default SourceLink
