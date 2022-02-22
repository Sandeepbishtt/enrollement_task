import React from 'react'
import Input from './Input'
import Select from './Select'
import DateValue from './DateValue'


function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'date':
      return <DateValue {...rest} />
    
    default:
      return null
  }
}

export default FormikControl