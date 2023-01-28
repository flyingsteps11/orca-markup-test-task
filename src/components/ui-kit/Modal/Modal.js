import React from 'react'
import ReactModal from 'react-modal'

const Modal = ({ isOpen = false, ...props }) => (
  <ReactModal isOpen={isOpen} {...props}>
    musor
  </ReactModal>
)
export default Modal
