import { z } from 'zod'
import { AUTH_CONSTANTS } from '@/shared/constants/auth'

export const RegisterFormSchema = z.object({
  username: z
    .string()
    .min(AUTH_CONSTANTS.VALIDATION.MIN_FIELD_LENGTH, 'MinErrorMessage')
    .max(AUTH_CONSTANTS.VALIDATION.MAX_FIELD_LENGTH, 'MaxErrorMessage'),
  email: z
    .string()
    .min(AUTH_CONSTANTS.VALIDATION.MIN_FIELD_LENGTH, 'MinErrorMessage')
    .email('emailErrorMessage')
    .max(AUTH_CONSTANTS.VALIDATION.MAX_FIELD_LENGTH, 'MaxErrorMessage'),
  password: z
    .string()
    .min(
      AUTH_CONSTANTS.VALIDATION.MIN_PASSWORD_LENGTH,
      'PasswordMinErrorMessage'
    )
    .max(AUTH_CONSTANTS.VALIDATION.MAX_FIELD_LENGTH, 'MaxErrorMessage'),
})

export type RegisterFormSchema = z.infer<typeof RegisterFormSchema>
