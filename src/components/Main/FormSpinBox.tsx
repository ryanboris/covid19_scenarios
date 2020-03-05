import React from 'react'

import _ from 'lodash'

import { Field, FormikErrors, FormikTouched } from 'formik'
import { FormGroup } from 'reactstrap'

export interface FormSpinBoxProps<T> {
  id: string
  label: string
  step?: number | string
  min?: number | string
  max?: number | string
  pattern?: string
  errors?: FormikErrors<T>
  touched?: FormikTouched<T>
}

export default function FormSpinBox<T>({
  id,
  label,
  step,
  min,
  max,
  pattern,
  errors,
  touched,
}: FormSpinBoxProps<T>) {
  const isTouched = _.get(touched, id)
  const errorMessage = _.get(errors, id)
  const showError = errorMessage && isTouched
  const borderDanger = showError ? 'border-danger' : ''

  return (
    <FormGroup>
      <label htmlFor={id}>{label}</label>
      <Field
        className={`form-control ${borderDanger}`}
        id={id}
        name={id}
        type="number"
        step={step}
        min={min}
        max={max}
        pattern={pattern}
      />
      {showError ? <div className="text-danger">{errorMessage}</div> : null}
    </FormGroup>
  )
}