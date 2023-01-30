import React from 'react'
import Button from '../Button/Button'
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalSubTitle,
  ModalText,
  ModalTitle,
  OverlayStyles,
  StyledIconClose,
  StyledModal,
} from './Modal.styles'

import { BorderOrange, BorderRed, BorderYellow } from '../IconWrapper/IconWrapper.style'
import { IconWarningOrange, IconWarningRed, IconWarningYellow } from '../../../assets/icons'

const Modal = ({ isOpen = false, onClose, item }) => (
  <StyledModal style={{ overlay: OverlayStyles }} isOpen={isOpen}>
    <ModalHeader>
      {item.icon === 0 && (
        <BorderRed>
          <IconWarningRed />
        </BorderRed>
      )}
      {item.icon === 1 && (
        <BorderOrange>
          <IconWarningOrange />
        </BorderOrange>
      )}
      {item.icon === 2 && (
        <BorderYellow>
          <IconWarningYellow />
        </BorderYellow>
      )}
      <ModalTitle>{item.name}</ModalTitle>
      <StyledIconClose onClick={onClose} />
    </ModalHeader>
    <ModalBody>
      <ModalSubTitle>Additional info</ModalSubTitle>
      <ModalText>{item.additionalInfo}</ModalText>
    </ModalBody>
    <ModalFooter>
      <Button primary>Download</Button>
      <Button onClick={onClose}>Cancel</Button>
    </ModalFooter>
  </StyledModal>
)
export default Modal
