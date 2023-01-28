import React from 'react'
import { ToolbarMain, Wrapper } from './Toolbar.styles'
import { IconLogo } from '../../assets/icons'
import Checkbox from '../ui-kit/Checkbox/Checkbox'
import Dropdown from '../ui-kit/Dropdown/Dropdown'

const testOptions = [1, 2, 3]
const Toolbar = () => {
  const [checked, setChecked] = React.useState()
  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <ToolbarMain>
      <a href="#">
        <IconLogo />
      </a>
      <Wrapper>
        <Checkbox label="I accept" value={checked} onChange={handleChange} />
        <Dropdown options={testOptions} label="Group by" Icon={IconLogo} />
      </Wrapper>
    </ToolbarMain>
  )
}

export default Toolbar
