import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import FormField from './FormField'

const validationSchema = object({
  login: string()
    .required('Login is required')
    .min(4, 'Login must be at least 4 characters long')
    .max(20, 'Login must be less than 20 characters long'),
  email: string()
    .required('E-mail is required')
    .min(8, 'E-mail must be at least 8 characters long')
    .max(30, 'E-mail must be less than 30 characters long'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password must be less than 20 characters long')
})

const initialValues = {
  login: '',
  email: '',
  password: ''
}

const handleSubmit = (values: { login: string; email: string; password: string }) => {
  console.log(values)
}

const randomSuffix = Math.random().toString(36).substring(2, 10)

const RegisterForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnMount={true}
    >
      {({ errors, touched, isValid }) => (
        <Form autoComplete="new-password">
          <FormField
            id={`login-${randomSuffix}`}
            label="Login"
            name="login"
            type="text"
            placeholder="Enter your login"
            successMessage="Login is valid"
            touched={touched.login}
            error={errors.login}
            autoComplete="new-password"
          />

          <FormField
            id={`email-${randomSuffix}`}
            label="E-mail"
            name="email"
            type="text"
            placeholder="Enter your enail"
            successMessage="Email is valid"
            touched={touched.email}
            error={errors.email}
            autoComplete="new-password"
          />

          <FormField
            id={`password-${randomSuffix}`}
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            successMessage="Password is valid"
            touched={touched.password}
            error={errors.password}
            autoComplete="new-password"
          />

          {/* Checkbox group needs its own CheckboxField component */}
          <div className="checkbox-group">
            <Field type="checkbox" id="subscribe" name="subscribe" />
            <label htmlFor="subscribe">Subscribe to Our Newsletter</label>
          </div>
          <FormField
            id={`checkbox-${randomSuffix}`}
            label="Subscribe to Our Newsletter"
            name="subscribe"
            placeholder="subscribe"
            successMessage="Checkbox"
          />
          <button type="submit" disabled={!isValid}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterForm
