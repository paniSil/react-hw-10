import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'

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
  password: '',
  subscribe: false
}

const handleSubmit = (values: { login: string; email: string; password: string; subscribe: boolean }) => {
  console.log(values)
}

const BasicForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnMount={true}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="login">Login</label>
          <Field type="text" id="login" name="login" placeholder="Enter your login" />
          <ErrorMessage name="login" component="div" className="error" />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <Field type="text" id="email" name="email" placeholder="Enter your e-mail" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" placeholder="Enter your password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        <div className="checkbox-group">
          <Field className="checkbox-input" type="checkbox" id="subscribe" name="subscribe" />
          <label htmlFor="subscribe">Subscribe to Our Newsletter</label>
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  )
}

export default BasicForm
