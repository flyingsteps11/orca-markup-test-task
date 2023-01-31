import ReactModal from 'react-modal'
import styled from 'styled-components'
import { defaultTheme } from '../../styles/theme'
import { IconClose } from '../../assets/icons'
import { Wrapper } from '../ui-kit/Button/Button.styles'

export const OverlayStyles = {
  background: defaultTheme.colors.bgModal,
}
export const StyledModal = styled(ReactModal)`
  max-width: 932px;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateY(-50%);
  padding: 16px;
  @media screen and (max-height: 600px) {
    height: 410px;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: none;
  }
`
export const ModalContainer = styled.div`
  border-radius: ${defaultTheme.sizes.borderRadius};
  background: ${defaultTheme.colors.white};
`

export const ModalHeader = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${defaultTheme.colors.grey};
  position: relative;
`
export const ModalBody = styled.div`
  padding: 24px 24px 0;
  overflow: auto;
  max-height: 320px;
  @media screen and (max-height: 600px) {
    max-height: 226px;
  }
`
export const ModalFooter = styled.div`
  padding: 16px 24px 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 16px;

  ${Wrapper} {
    height: 30px;
  }
`
export const ModalTitle = styled.h2`
  font-size: 1.714rem;
  margin-left: 12px;
  font-weight: normal;
`
export const ModalSubTitle = styled.h3`
  color: ${defaultTheme.colors.darkGrey};
  margin-bottom: 8px;
  font-weight: normal;
`
export const ModalText = styled.p`
  word-break: break-all;
`

export const StyledIconClose = styled(IconClose)`
  position: absolute;
  top: 33px;
  right: 24px;
  cursor: pointer;
`
