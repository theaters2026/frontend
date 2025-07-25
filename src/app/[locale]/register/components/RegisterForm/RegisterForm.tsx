'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterFormSchema } from './RegisterForm.schema'
import { useTranslations } from 'next-intl'
import { AuthService } from '@/core/services/authService'
import { AuthForm } from '@/core/ui/Forms/AuthForm'
import { TextField } from '@/core/ui/FormFields'

export const RegisterForm: React.FC = () => {
  const t = useTranslations('Register')

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: RegisterFormSchema) => {
    try {
      await AuthService.register(data)
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }

  const fields = (
    <>
      <TextField
        control={form.control}
        name="username"
        label={t('usernameText')}
        placeholder={t('usernamePlaceholder')}
      />
      <TextField
        control={form.control}
        name="email"
        label={t('emailText')}
        type="email"
        placeholder={t('emailPlaceholder')}
      />
      <TextField
        control={form.control}
        name="password"
        label={t('passwordText')}
        type="password"
        placeholder={t('passwordPlaceholder')}
      />
    </>
  )

  return (
    <AuthForm
      form={form}
      onSubmit={onSubmit}
      fields={fields}
      submitText={t('buttonSubmit')}
      loadingText={t('registering')}
      isLoading={form.formState.isSubmitting}
    />
  )
}
