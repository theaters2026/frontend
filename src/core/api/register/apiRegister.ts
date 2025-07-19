import { AxiosResponse } from 'axios'
import { localApi } from '../api'

type RegisterData = {
  username: string
  password: string
  email: string
}

export const register = async (data: RegisterData): Promise<AxiosResponse> => {
  try {
    const response = await localApi.post('/auth/register', {
      username: data.username,
      password: data.password,
      email: data.email,
    })
    return response
  } catch (error) {
    console.error('Registration error:', error)
    throw error
  }
}
