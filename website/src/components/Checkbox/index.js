import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { getRandomId } from '@utils'
import { CheckboxContainer, CheckboxInput, CheckboxLabel } from './styles'

const Checkbox = forwardRef(
  ({ name, label, value = '', fullWidth, checked, ...props }, ref) => {
    const id = getRandomId()
    return (
      <CheckboxContainer fullWidth={fullWidth}>
        <CheckboxInput
          {...props}
          ref={ref}
          name={name}
          type='checkbox'
          id={`checkbox-${id}`}
          value={value}
          checked={checked && 'checked'}
        />
        <CheckboxLabel htmlFor={`checkbox-${id}`}>{label}</CheckboxLabel>
      </CheckboxContainer>
    )
  }
)

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  fullWidth: PropTypes.bool,
  checked: PropTypes.bool
}

export default Checkbox
