interface NotificationMessagesProps {
  successMessage?: string | null
  errorMessage?: string | null
  successClassName?: string
  errorClassName?: string
}

export const NotificationMessages = ({
  successMessage,
  errorMessage,
  successClassName,
  errorClassName,
}: NotificationMessagesProps) => {
  return (
    <>
      {successMessage && (
        <div className={successClassName}>{successMessage}</div>
      )}

      {errorMessage && <div className={errorClassName}>{errorMessage}</div>}
    </>
  )
}
