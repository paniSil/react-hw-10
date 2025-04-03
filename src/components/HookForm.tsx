import { useForm } from 'react-hook-form'

type FormData = {
  login: string
  password: string
  phone: string
  email: string
  subscribe: boolean
}

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'onChange'
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="login">Login</label>
        <input
          id="login"
          type="text"
          autoComplete="off"
          placeholder="Enter your login"
          {...register('login', {
            required: 'Login is required',
            minLength: { value: 3, message: 'Login must be at least 3 characters' },
            maxLength: { value: 15, message: 'Login must not be longer than 15 characters' },
            pattern: {
              value: /^[A-Za-z][A-Za-z0-9]*$/,
              message: 'Login must start with letter and should not contain special symbols'
            }
          })}
        />
        {errors.login && <div className="error">{errors.login.message}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          autoComplete="off"
          placeholder="Enter your password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 5, message: 'Password must be at least 5 characters' },
            maxLength: { value: 20, message: 'Password must not be longer than 20 characters' }
          })}
        />
        {errors.password && <div className="error">{errors.password.message}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          autoComplete="off"
          placeholder="Enter your phone"
          {...register('phone', {
            required: 'Phone number is required',
            minLength: { value: 10, message: 'Phone number must be at least 10 characters' },
            maxLength: { value: 15, message: 'Phone number must not be longer than 15 characters' },
            pattern: {
              value: /^\+?\d{1,4}?[ -]?\(?\d{1,4}?\)?[ -]?\d{1,4}[ -]?\d{1,4}$/,
              message: 'Enter correct phone number'
            }
          })}
        />
        {errors.phone && <div className="error">{errors.phone.message}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="text"
          autoComplete="off"
          placeholder="Enter your email"
          {...register('email', {
            required: 'E-mail is required',
            minLength: { value: 7, message: 'E-mail must be at least 7 characters' },
            maxLength: { value: 25, message: 'E-mail must not be longer than 25 characters' },
            pattern: {
              value: /^[\w._+-]+@([a-z]+\.[a-z]{2,3})+$/,
              message: 'E-mail must be a valid e-mail address'
            }
          })}
        />
        {errors.email && <div className="error">{errors.email.message}</div>}
      </div>

      <div className="checkbox-group">
        <input className="checkbox-input" id="suscribe" type="checkbox" />
        <label htmlFor="suscribe">Subscribe to Our Newsletter</label>
      </div>

      <button type="submit">Register</button>
    </form>
  )
}

export default HookForm
