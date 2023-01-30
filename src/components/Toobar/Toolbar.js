import React from 'react'
import { ToolbarMain, Wrapper } from './Toolbar.styles'
import { IconGroup, IconLogo, IconSort } from '../../assets/icons'
import Checkbox from '../ui-kit/Checkbox/Checkbox'
import Dropdown from '../ui-kit/Dropdown/Dropdown'
import ToggleSwitch from '../ui-kit/ToggleSwitch/ToggleSwitch'

const testOptions = ['Name', 'File name', 'IP Address v4', 'IP Address v6', 'Scan source']

const Toolbar = ({ isTableVisible, setTableVisible }) => {
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
        <Dropdown options={testOptions} label="Group by" Icon={IconGroup} />
        <Dropdown options={testOptions} label="Sort by" Icon={IconSort} />
        <ToggleSwitch isTableVisible={isTableVisible} setTableVisible={setTableVisible} />
      </Wrapper>
    </ToolbarMain>
  )
}

export default Toolbar
