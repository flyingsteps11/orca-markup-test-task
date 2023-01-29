import React, { useState } from 'react'
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from 'components/ui-kit/Dropdown/Dropdown.styles'
import { IconArrow } from '../../../assets/icons'

const Dropdown = ({ Icon, options, label }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const toggling = () => setIsOpen(!isOpen)
  const onOptionClicked = value => () => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        <Icon />
        <span>{selectedOption || label}</span>
        <IconArrow />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option, index) => (
              <ListItem onClick={onOptionClicked(option)} key={index}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}
export default Dropdown
