import { ErrorMessage, Field } from 'formik'
import SuccessMessage from './SuccessMessage'

type FormFieldProps = {
  id: string
  label?: string
  name: string
  type?: string
  autoComplete?: string
  touched?: boolean
  error?: string
  placeholder?: string
  successMessage?: string
}

const FormField = ({
  id,
  label,
  name,
  type = 'text',
  autoComplete,
  touched,
  error,
  placeholder,
  successMessage
}: FormFieldProps) => {
  const autoCompleteProps =
    autoComplete !== undefined
      ? { autoComplete }
      : { autoComplete: 'off', autoCorrect: 'off', autoCapitalize: 'off', spellCheck: 'false' }

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <Field id={id} name={name} type={type} {...autoCompleteProps} placeholder={placeholder} />
      <ErrorMessage name={name} component="div" className="error" />
      {successMessage && <SuccessMessage message={successMessage} touched={touched} error={error} />}
    </div>
  )
}

export default FormField
