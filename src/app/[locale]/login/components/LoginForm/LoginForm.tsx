'use client'

import { Button } from '@/shared/ui'
import { useForm } from 'react-hook-form'
import { LoginFormSchema } from './LoginForm.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/shared/ui/Form'
import { Input } from '@/shared/ui/Input'
import { useTranslations } from 'next-intl'
import { login } from '@/core/api/login/apiLogin'
import { AuthService } from '@/core/services/authService'
import { signIn } from 'next-auth/react'

export const LoginForm: React.FC = () => {
  const t = useTranslations('Login')
  const tValidation = useTranslations('Validation')

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: '',
      password: '',
      email: '',
    },
  })

  const onSubmit = async (data: LoginFormSchema) => {
    const result = await signIn('credentials', {
      redirect: false,
      username: data.username,
      email: data.email,
      password: data.password,
    })

    if (result?.error) {
      console.log('не успешно')
    } else if (result?.ok) {
      console.log('успешно')
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <p>{t('userNameText')}</p>
            <Input
              id="username"
              placeholder={t('userNamePlaceholder')}
              {...form.register('username')}
            />
            {form.formState.errors.username && (
              <p>
                {tValidation(form.formState.errors.username.message as string)}
              </p>
            )}
          </div>

          <div>
            <p>{t('passwordText')}</p>
            <Input
              id="password"
              type="password"
              placeholder={t('passwordPlaceholder')}
              {...form.register('password')}
            />
            {form.formState.errors.password && (
              <p>
                {tValidation(form.formState.errors.password.message as string)}
              </p>
            )}
          </div>

          <div>
            <p>{t('emailText')}</p>
            <Input
              id="email"
              type="email"
              placeholder={t('emailPlaceholder')}
              {...form.register('email')}
            />
            {form.formState.errors.email && (
              <p>
                {tValidation(form.formState.errors.email.message as string)}
              </p>
            )}
          </div>

          <div>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? t('loading') : t('buttonSubmit')}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
