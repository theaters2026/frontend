'use client'

import { Button } from '@/shared/ui'
import { useForm } from 'react-hook-form'
import { loginFormSchema, LoginFormSchema } from './loginForm.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { useTranslations } from 'next-intl'
import { login } from './apiLogin'
import { saveLoginTokens } from './cookieLogin'

export const LoginForm: React.FC = () => {
  const t = useTranslations('Login')
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
      email: '',
    },
  })

  const onSubmit = async (data: LoginFormSchema) => {
    console.log(saveLoginTokens((await login(data)).data))
    console.log('Form data:', data)
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="place-items-center space-y-6"
        >
          <div>
            <p> {t('userNameText')} </p>
            <Input
              id="username"
              placeholder={t('userNamePlaceholder')}
              {...form.register('username')}
            />
            {form.formState.errors.username && (
              <p className="text-sm text-destructive">
                {t(`${form.formState.errors.username.message}`)}
              </p>
            )}
          </div>
          <div>
            <p> {t('passwordText')} </p>
            <Input
              id="password"
              placeholder={t('passwordPlaceholder')}
              {...form.register('password')}
            />
            {form.formState.errors.password && (
              <p className="text-sm text-destructive">
                {t(`${form.formState.errors.password.message}`)}
              </p>
            )}
          </div>
          <div>
            <p> {t('emailText')} </p>
            <Input
              id="email"
              placeholder={t('emailPlaceholder')}
              {...form.register('email')}
            />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive">
                {t(`${form.formState.errors.email.message}`)}
              </p>
            )}
          </div>
          <div>
            <Button type="submit"> {t('buttonSubmit')} </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
