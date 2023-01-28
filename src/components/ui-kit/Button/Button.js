import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from 'components/ui-kit/Button/Button.styles'

const Button = ({ children, onClick }) => <Wrapper onClick={onClick}>{children}</Wrapper>

Button.propTypes = {
  children: PropTypes.node,
}

Button.defaultProps = {
  children: null,
}

export default Button
