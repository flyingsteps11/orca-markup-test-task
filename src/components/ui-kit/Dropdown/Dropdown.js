import React, { useEffect, useRef, useState } from 'react'
import {
  DropdownContainer,
  DropdownHeader,
  DropdownList,
  ListItem,
  StyledDropdown,
  StyledIconArrow,
} from './Dropdown.styles'
import { IconDownload } from '../../../assets/icons'

const Dropdown = () => {
  const container = useRef()
  const [dropdownState, setDropdownState] = useState({ open: false })

  const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open })

  const handleClickOutside = e => {
    if (container.current && !container.current.contains(e.target)) {
      setDropdownState({ open: false })
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <StyledDropdown ref={container}>
      <DropdownHeader onClick={handleDropdownClick}>
        <IconDownload />
        <span>Download as</span>
        <StyledIconArrow rotate={dropdownState.open} />
      </DropdownHeader>
      {dropdownState.open && (
        <DropdownContainer>
          <DropdownList>
            <ListItem>Document</ListItem>
            <ListItem>Image</ListItem>
            <ListItem>PDF</ListItem>
            <ListItem>HTML</ListItem>
          </DropdownList>
        </DropdownContainer>
      )}
    </StyledDropdown>
  )
}

export default Dropdown
