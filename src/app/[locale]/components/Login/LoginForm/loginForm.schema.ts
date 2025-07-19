'use client'

import { z } from 'zod'

export const loginFormSchema = z.object({
  username: z.string().min(1, 'MinErrorMessage').max(100, 'MaxErrorMessage'),
  password: z.string().min(1, 'MinErrorMessage').max(100, 'MaxErrorMessage'),
  email: z.email({ message: 'emailErrorMessage' }),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
