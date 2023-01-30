import React from 'react'
import {
  StyledIconToggleCard,
  StyledIconToggleTable,
  ToggleBtn,
  ToggleSwitchContainer,
  ToggleBtnActive,
} from './ToggleSwitch.styles'
import { IconToggleCard, IconToggleTable } from '../../../assets/icons'

function ToggleSwitch({ isTableVisible, setTableVisible }) {
  const onToggle = () => setTableVisible(!isTableVisible)
  return (
    <ToggleSwitchContainer onClick={onToggle}>
      {isTableVisible ? (
        <ToggleBtnActive>
          <IconToggleTable />
        </ToggleBtnActive>
      ) : (
        <ToggleBtn>
          <StyledIconToggleTable />
        </ToggleBtn>
      )}
      {isTableVisible ? (
        <ToggleBtn>
          <StyledIconToggleCard />
        </ToggleBtn>
      ) : (
        <ToggleBtnActive>
          <IconToggleCard />
        </ToggleBtnActive>
      )}
    </ToggleSwitchContainer>
  )
}

export default ToggleSwitch
