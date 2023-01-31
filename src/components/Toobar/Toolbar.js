import React, { useState } from 'react'
import { LinkLogo, ToolbarMain, ToolbarWrapper } from './Toolbar.styles'
import { IconGroup, IconLogo, IconSort } from '../../assets/icons'
import Checkbox from '../ui-kit/Checkbox/Checkbox'
import Select from '../ui-kit/Select/Select'
import ToggleSwitch from '../ui-kit/ToggleSwitch/ToggleSwitch'

const testOptions = ['Name', 'File name', 'IP Address v4', 'IP Address v6', 'Scan source']

const Toolbar = ({ isTableVisible, setTableVisible }) => {
  const [isCheckboxActive, setCheckboxActive] = useState(false)
  const checkboxToggle = () => {
    setCheckboxActive(!isCheckboxActive)
  }
  return (
    <ToolbarMain>
      <LinkLogo href="#">
        <IconLogo />
      </LinkLogo>
      <ToolbarWrapper>
        <Checkbox
          text="Show additional items"
          onChange={checkboxToggle}
          checked={isCheckboxActive}
        />
        <Select options={testOptions} label="Group by" Icon={IconGroup} />
        <Select options={testOptions} label="Sort by" Icon={IconSort} />
        <ToggleSwitch isTableVisible={isTableVisible} setTableVisible={setTableVisible} />
      </ToolbarWrapper>
    </ToolbarMain>
  )
}

export default Toolbar
