import React from 'react'
import ReactModal from 'react-modal'
import Button from '../Button/Button'
import { OverlayStyles, StyledModal } from './Modal.styles'

const Modal = ({ isOpen = false, onClose, item }) => (
  <StyledModal style={{ overlay: OverlayStyles }} isOpen={isOpen}>
    <Button onClick={onClose}>{item.name}</Button>
  </StyledModal>
)
export default Modal
