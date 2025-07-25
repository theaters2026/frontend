'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormSchema } from './LoginForm.schema'
import { useTranslations } from 'next-intl'
import { AuthService } from '@/core/services/authService'
import { AuthForm } from '@/core/ui/Forms/AuthForm'
import { TextField } from '@/core/ui/FormFields'

export const LoginForm: React.FC = () => {
  const t = useTranslations('Login')

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: '',
      password: '',
      email: '',
    },
  })

  const onSubmit = async (data: LoginFormSchema) => {
    try {
      await AuthService.login(data)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  const fields = (
    <>
      <TextField
        control={form.control}
        name="username"
        label={t('userNameText')}
        placeholder={t('userNamePlaceholder')}
      />
      <TextField
        control={form.control}
        name="password"
        label={t('passwordText')}
        type="password"
        placeholder={t('passwordPlaceholder')}
      />
      <TextField
        control={form.control}
        name="email"
        label={t('emailText')}
        type="email"
        placeholder={t('emailPlaceholder')}
      />
    </>
  )

  return (
    <AuthForm
      form={form}
      onSubmit={onSubmit}
      fields={fields}
      submitText={t('buttonSubmit')}
      loadingText={t('loading')}
      isLoading={form.formState.isSubmitting}
    />
  )
}
