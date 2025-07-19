'use client'

import { Button } from '@/shared/ui'
import { useForm } from 'react-hook-form'
import { registerFormSchema, RegisterFormSchema } from './registerForm.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { useTranslations } from 'next-intl'
import { register, saveRegisterTokens } from './api'

export const RegisterForm: React.FC = () => {
  const t = useTranslations('Register')
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
    },
  })

  const onSubmit = async (data: RegisterFormSchema) => {
    try {
      const response = await register(data)
      if (response.status === 200) {
        await saveRegisterTokens(response.data)
        console.log('Registration successful:', data)
      }
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="place-items-center space-y-6"
        >
          <div>
            <p>Имя пользователя</p>
            <Input
              id="username"
              placeholder="Введите имя пользователя"
              {...form.register('username')}
            />
            {form.formState.errors.username && (
              <p className="text-sm text-destructive">
                {t(`${form.formState.errors.username.message}`)}
              </p>
            )}
          </div>
          <div>
            <p>Электронная почта</p>
            <Input
              id="email"
              type="email"
              placeholder="Введите адрес электронной почты"
              {...form.register('email')}
            />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive">
                {t(`${form.formState.errors.email.message}`)}
              </p>
            )}
          </div>
          <div>
            <p>Пароль</p>
            <Input
              id="password"
              type="password"
              placeholder="Введите пароль"
              {...form.register('password')}
            />
            {form.formState.errors.password && (
              <p className="text-sm text-destructive">
                {t(`${form.formState.errors.password.message}`)}
              </p>
            )}
          </div>
          <div>
            <p>Подтвердите пароль</p>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Повторите пароль"
              {...form.register('confirmPassword')}
            />
            {form.formState.errors.confirmPassword && (
              <p className="text-sm text-destructive">
                {t(`${form.formState.errors.confirmPassword.message}`)}
              </p>
            )}
          </div>
          <div>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting
                ? 'Регистрация...'
                : 'Зарегистрироваться'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
