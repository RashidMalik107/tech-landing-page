import type { ChangeEvent, FC, FormEvent } from 'react'
import { useState } from 'react'

export type FormValues = {
  name: string
  company: string
  email: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(values.email)) {
      errors.email = 'Please enter a valid email address.'
    }
  }

  return errors
}

const useForm = (initialValues: FormValues, onSuccess?: (values: FormValues) => void) => {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setValues((previous) => ({
      ...previous,
      [name]: value,
    }))

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationErrors = validate(values)
    setErrors(validationErrors)

    const hasErrors = Object.keys(validationErrors).length > 0
    if (hasErrors) {
      return
    }

    onSuccess?.(values)
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  }
}

type RegistrationFormProps = {
  onSuccess?: (values: FormValues) => void
}

export const RegistrationForm: FC<RegistrationFormProps> = ({ onSuccess }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      name: '',
      company: '',
      email: '',
    },
    onSuccess,
  )

  return (
    <form className="registration-form" onSubmit={handleSubmit} noValidate>
      <div className="registration-form-field">
        <label htmlFor="name" className="registration-form-label">
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="registration-form-input"
          placeholder="Enter your name"
          required
          value={values.name}
          onChange={handleChange}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="registration-form-error" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className="registration-form-field">
        <label htmlFor="company" className="registration-form-label">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="registration-form-input"
          placeholder="Enter your company name"
          value={values.company}
          onChange={handleChange}
          aria-invalid={errors.company ? 'true' : 'false'}
          aria-describedby={errors.company ? 'company-error' : undefined}
        />
        {errors.company && (
          <p id="company-error" className="registration-form-error" role="alert">
            {errors.company}
          </p>
        )}
      </div>

      <div className="registration-form-field">
        <label htmlFor="email" className="registration-form-label">
          Email address <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="registration-form-input"
          placeholder="Enter your email address"
          required
          value={values.email}
          onChange={handleChange}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="registration-form-error" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="registration-form-actions">
        <button type="submit" className="registration-form-submit">
          Register
        </button>
      </div>
    </form>
  )
}

export default RegistrationForm

