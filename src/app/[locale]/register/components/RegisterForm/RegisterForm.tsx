'use client'

import { Button } from '@/shared/ui'
import { useForm } from 'react-hook-form'
import { RegisterFormSchema } from './RegisterForm.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/shared/ui/Form'
import { Input } from '@/shared/ui/Input'
import { useTranslations } from 'next-intl'
import { register as registerUser } from '@/core/api/register/apiRegister'
import { AuthService } from '@/core/services/authService'

export const RegisterForm: React.FC = () => {
  const t = useTranslations('Register')
  const tValidation = useTranslations('Validation')

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
      const response = await AuthService.register(data)
      if (response) {
        return null
      }
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <p>{t('usernameText')}</p>
            <Input
              id="username"
              placeholder={t('usernamePlaceholder')}
              {...form.register('username')}
            />
            {form.formState.errors.username && (
              <p>
                {tValidation(form.formState.errors.username.message as string)}
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
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting
                ? t('registering')
                : t('buttonSubmit')}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
