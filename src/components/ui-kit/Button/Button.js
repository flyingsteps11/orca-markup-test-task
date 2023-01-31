import React from 'react'
import { Wrapper } from 'components/ui-kit/Button/Button.styles'

const Button = ({ children, onClick, ...restProps }) => (
  <Wrapper onClick={onClick} {...restProps}>
    {children}
  </Wrapper>
)
export default Button
