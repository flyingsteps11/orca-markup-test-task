import React, { useEffect, useRef, useState } from 'react'
import {
  ListItem,
  SelectContainer,
  SelectHeader,
  SelectList,
  SelectListContainer,
  StyledIconArrowSelect,
} from 'components/ui-kit/Select/Select.styles'

const Select = ({ Icon, options, label }) => {
  const container = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const toggling = () => setIsOpen(!isOpen)
  const onOptionClicked = value => () => {
    setSelectedOption(value)
    setIsOpen(false)
  }
  const handleClickOutside = e => {
    if (container.current && !container.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <SelectContainer ref={container}>
      <SelectHeader onClick={toggling}>
        <Icon />
        <span>{selectedOption || label}</span>
        <StyledIconArrowSelect rotate={isOpen} />
      </SelectHeader>
      {isOpen && (
        <SelectListContainer>
          <SelectList>
            {options.map((option, index) => (
              <ListItem onClick={onOptionClicked(option)} key={index}>
                {option}
              </ListItem>
            ))}
          </SelectList>
        </SelectListContainer>
      )}
    </SelectContainer>
  )
}
export default Select
