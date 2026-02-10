import type { FC } from 'react'
import { useEffect, useState } from 'react'
import registrationImg from '../assets/registration.png'
import { RegistrationForm, type FormValues } from './RegistrationForm'

const STORAGE_KEY = 'registrationFormData'

export const Registration: FC = () => {
  const [submittedName, setSubmittedName] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return

    try {
      const parsed = JSON.parse(stored) as FormValues
      setSubmittedName(parsed.name ?? '')
    } catch {
      // Ignore malformed data
    }
  }, [])

  const handleSuccess = (values: FormValues) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values))
    }
    setSubmittedName(values.name)
  }

  return (
    <section id="registration" className="registration" aria-labelledby="registration-heading">
      <div className="registration-inner">
        <div className="registration-visual">
          <figure className="registration-illustration">
            <img
              src={registrationImg}
              alt="3D illustration of a person managing digital documents and tasks."
              className="registration-illustration-image"
              width={420}
              height={420}
              loading="lazy"
            />
          </figure>
        </div>

        <div className="registration-form-wrapper">
          {submittedName ? (
            <>
              <header className="registration-header">
                <h2 id="registration-heading" className="registration-title registration-title-success">
                  Registration
                </h2>
              </header>
              <div className="registration-success" role="status" aria-live="polite">
                <p className="registration-success-text">
                  Hi <span className="registration-success-name">{submittedName}</span>, thanks for registering.
                  Somebody will contact you soon.
                </p>
              </div>
            </>
          ) : (
            <>
              <header className="registration-header">
                <h2 id="registration-heading" className="registration-title">
                  Registration
                </h2>
                <p className="registration-subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra
                  sit.
                </p>
              </header>

              <RegistrationForm onSuccess={handleSuccess} />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Registration

