import ReactModal from 'react-modal'
import styled, { css } from 'styled-components'
import { defaultTheme } from '../../../styles/theme'
import { BorderOrange, BorderRed, BorderYellow } from '../IconWrapper/IconWrapper.style'
import { IconClose } from '../../../assets/icons'
import { Wrapper } from '../Button/Button.styles'

export const OverlayStyles = {
  background: defaultTheme.colors.bgModal,
}
export const StyledModal = styled(ReactModal)`
  border-radius: ${defaultTheme.sizes.borderRadius};
  background: ${defaultTheme.colors.white};
  max-width: 900px;
`
export const LargeBorderElements = css`
  width: 32px;
  height: 32px;
  margin: 0;

  svg {
    width: 16px;
    height: 16px;
  }
`
export const ModalHeader = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${defaultTheme.colors.grey};
  position: relative;

  ${BorderRed} {
    ${LargeBorderElements}
  }

  ${BorderYellow} {
    ${LargeBorderElements}
  }

  ${BorderOrange} {
    ${LargeBorderElements}
  }
`
export const ModalBody = styled.div`
  padding: 24px 24px 16px;
`
export const ModalFooter = styled.div`
  padding: 0 24px 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  margin-bottom: 16px;
  font-weight: normal;
`
export const ModalText = styled.p`
  word-break: break-all;
`

export const StyledIconClose = styled(IconClose)`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
`
