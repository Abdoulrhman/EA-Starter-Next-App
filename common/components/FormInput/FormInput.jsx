import * as React from 'react'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'


const FormInput = (props) => {
  const {
    variant,
    required,
    label,
    defaultValue,
    disabled,
    type,
    helperText,
    placeholder,
    select,
    options,
  } = props


  const renderTextPasswordInput = () => (
    <TextField
      label={label}
      variant={variant}
      required={required}
      defaultValue={defaultValue}
      disabled={disabled}
      type={type}
      helperText={helperText}
      placeholder={placeholder}
    />
  )

  const renderSelectInput = () => (
    <TextField
      label={label}
      variant={variant}
      required={required}
      defaultValue={defaultValue}
      disabled={disabled}
      type={type}
      helperText={helperText}
      placeholder={placeholder}
      select={select}
    >
      <ul>
        {options.map((item) => (<li>{item}</li>))}
      </ul>
    </TextField>
  )


  const renderSelectedInput = () => {
    switch (type) {
      case 'text':
        renderTextPasswordInput()
        break

      case 'password':
        renderTextPasswordInput()
        break
      case 'select':
        renderSelectInput()
        break

      default:
        renderTextPasswordInput()

        break
    }
  }

  return (
    <p>tet</p>
  )
}

FormInput.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.instanceOf(Array),
  select: PropTypes.bool,
}

FormInput.defaultProps = {
  variant: 'outlined',
  type: 'text',
  required: false,
  label: 'Label',
  defaultValue: 'Default Value',
  disabled: false,
  helperText: '',
  placeholder: '',
  select: false,
  options: [],

}

export default FormInput
