type SuccessMessageProps = {
  message: string
  touched?: boolean
  error?: string
}

const SuccessMessage = ({ message, touched, error }: SuccessMessageProps) => {
  if (!touched || error) return null
  return <div className="success">{message}</div>
}

export default SuccessMessage
