import { Formik, Form } from 'formik'
import { boolean, object, string } from 'yup'
import FormField from './FormField'

const validationSchema = object({
  login: string()
    .required('Login is required')
    .min(4, 'Login must be at least 4 characters long')
    .max(20, 'Login must be less than 20 characters long')
    .matches(/^[A-Za-z][A-Za-z0-9]*$/, 'Login must start with letter and should not contain special symbols'),
  email: string()
    .required('E-mail is required')
    .min(6, 'E-mail must be at least 6 characters long')
    .max(256, 'E-mail must be less than 256 characters long')
    .matches(/^[\w._+-]+@([a-z]+\.[a-z]{2,3})+$/, 'E-mail must be a valid e-mail address'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password must be less than 20 characters long'),
  subscribe: boolean().oneOf([true], 'Please, agree to Terms of Use')
})

const initialValues = {
  login: '',
  email: '',
  password: '',
  subscribe: false
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

          <div className="checkbox-group">
            <FormField id="subscribe" type="checkbox" name="subscribe" error={errors.subscribe} />
            {(!errors.subscribe || !touched.subscribe) && <label htmlFor="subscribe">Agree to Terms of Use</label>}
          </div>

          <button type="submit" disabled={!isValid}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterForm
