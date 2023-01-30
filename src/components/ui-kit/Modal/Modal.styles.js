import ReactModal from 'react-modal'
import styled from 'styled-components'
import { defaultTheme } from '../../../styles/theme'

export const OverlayStyles = {
  background: 'yellow',
}
export const StyledModal = styled(ReactModal)`
  background: ${defaultTheme.colors.blue};
`
