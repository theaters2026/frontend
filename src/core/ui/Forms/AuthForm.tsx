import { ReactNode } from 'react'
import { UseFormReturn, FieldValues } from 'react-hook-form'
import { Button } from '@/shared/ui'
import { Form } from '@/shared/ui/Form'

interface AuthFormProps<T extends FieldValues> {
  form: UseFormReturn<T>
  onSubmit: (data: T) => Promise<void>
  fields: ReactNode
  submitText: string
  loadingText: string
  isLoading: boolean
}

export function AuthForm<T extends FieldValues>({
  form,
  onSubmit,
  fields,
  submitText,
  loadingText,
  isLoading,
}: AuthFormProps<T>) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {fields}
        <div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? loadingText : submitText}
          </Button>
        </div>
      </form>
    </Form>
  )
}
