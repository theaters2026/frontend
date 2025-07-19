'use client'

import { z } from 'zod'

export const registerFormSchema = z
  .object({
    username: z.string().min(1, 'MinErrorMessage').max(100, 'MaxErrorMessage'),
    password: z
      .string()
      .min(6, 'PasswordMinErrorMessage')
      .max(100, 'MaxErrorMessage'),
    confirmPassword: z
      .string()
      .min(1, 'MinErrorMessage')
      .max(100, 'MaxErrorMessage'),
    email: z.email({ message: 'emailErrorMessage' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'passwordsDoNotMatch',
    path: ['confirmPassword'],
  })

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
