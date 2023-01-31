import React from 'react'
import Button from '../ui-kit/Button/Button'
import {
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalSubTitle,
  ModalText,
  ModalTitle,
  OverlayStyles,
  StyledIconClose,
  StyledModal,
} from './Modal.styles'

import {
  BackgroundOrange,
  BackgroundRed,
  BackgroundYellow,
} from '../ui-kit/IconWrapper/IconWrapper.style'
import { IconWarningOrange, IconWarningRed, IconWarningYellow } from '../../assets/icons'
import Dropdown from '../ui-kit/Dropdown/Dropdown'

const Modal = ({ isOpen = false, onClose, item }) => (
  <StyledModal style={{ overlay: OverlayStyles }} isOpen={isOpen}>
    <ModalContainer>
      <ModalHeader>
        {item.icon === 0 && (
          <BackgroundRed>
            <IconWarningRed />
          </BackgroundRed>
        )}
        {item.icon === 1 && (
          <BackgroundOrange>
            <IconWarningOrange />
          </BackgroundOrange>
        )}
        {item.icon === 2 && (
          <BackgroundYellow>
            <IconWarningYellow />
          </BackgroundYellow>
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
        <Dropdown />
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </ModalContainer>
  </StyledModal>
)
export default Modal
