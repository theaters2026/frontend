'use client'

import { Button } from '@/shared/ui'
import { useForm } from 'react-hook-form'
import { loginFormSchema, LoginFormSchema } from './login-form.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { useTranslations } from 'next-intl'
import axios, { type AxiosResponse } from 'axios'

type RespType = {
  username: string
  password: string
  email: string
}

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
    await axios
      .post<RespType>(`http://localhost:3000/auth/login`, {
        username: data.username,
        password: data.password,
        email: data.email,
      })
      .then((response: AxiosResponse) => {
        console.log('Login confirm', response)
      })
      .catch(async (response: AxiosResponse) => {
        await axios
          .post<RespType>(`http://localhost:3000/auth/register`, {
            username: data.username,
            password: data.password,
            email: data.email,
          })
          .then((response: AxiosResponse) => {
            console.log('Login confirm', response)
          })
          .catch(async (response: AxiosResponse) => {
            console.log('Login confirm', response)
          })
      })
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
          {/* <div>
            <Button type="button" onClick={async () => {
              await axios
                .get<RespType>(`http://localhost:3000/api#/auth/register`)
                .then((response: AxiosResponse) => {
                  console.log('Login confirm')
                })
                .catch(async (response: AxiosResponse) => {
                  console.log('Login confirm')
                })
            }}> O </Button>
          </div> */}
        </form>
      </Form>
    </div>
  )
}
