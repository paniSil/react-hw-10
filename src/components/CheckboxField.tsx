import { Field } from 'formik'

type CheckboxFieldProps = {
  id: string
  label?: string
  name: string
  type?: string
  touched?: boolean
  error?: string
}
const CheckboxField = ({ id, label, name, type = 'checkbox' }: CheckboxFieldProps) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <Field id={id} name={name} type={type} />
    </div>
  )
}

export default CheckboxField
