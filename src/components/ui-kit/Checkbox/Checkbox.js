import { CheckboxDisplay, CheckboxInput, CheckboxText, Label } from './Checkbox.styles'
import { IconAgree } from '../../../assets/icons'

const Checkbox = ({ checked = false, text, onChange }) => {
  return (
    <Label>
      <CheckboxInput {...{ checked, onChange }} />
      <CheckboxDisplay>{checked ? <IconAgree /> : <></>}</CheckboxDisplay>
      <CheckboxText>{text}</CheckboxText>
    </Label>
  )
}

export default Checkbox
