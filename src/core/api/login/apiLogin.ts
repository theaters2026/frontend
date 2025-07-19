import { AxiosResponse } from 'axios'
import { localApi } from '../api'
import { LoginFormSchema } from '@/app/[locale]/login/components/LoginForm/LoginForm.schema'

type DataType = {
  access_token: string
  refresh_token: string
}

export const login = async (
  data: LoginFormSchema
): Promise<AxiosResponse<DataType> | void> => {
  try {
    const response = await localApi.post<DataType>('/auth/login', {
      username: data.username,
      password: data.password,
      email: data.email,
    })
    return response
  } catch (error) {
    console.error('Login error:', error)
    throw error
  }
}
