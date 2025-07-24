import { useState } from 'react'

export const useNotifications = () => {
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const clearNotifications = () => {
    setSubmitError(null)
    setSuccessMessage(null)
  }

  const showError = (error: string) => {
    setSubmitError(error)
    setSuccessMessage(null)
  }

  const showSuccess = (message: string) => {
    setSuccessMessage(message)
    setSubmitError(null)
  }

  return {
    submitError,
    successMessage,
    clearNotifications,
    showError,
    showSuccess,
  }
}
