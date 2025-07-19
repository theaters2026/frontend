'use client'

import axios, { type AxiosResponse } from 'axios'

type RegisterData = {
  username: string
  password: string
  email: string
  confirmPassword: string
}

type AuthResponse = {
  access_token: string
  refresh_token: string
}

const API = process.env['NEXT_PUBLIC_LOCAL_API_URL']

export const register = async (data: RegisterData) => {
  return await axios
    .post<RegisterData>(`${API}/auth/register`, {
      username: data.username,
      password: data.password,
      email: data.email,
      confirmPassword: data.confirmPassword,
    })
    .then((response: AxiosResponse) => {
      return response
    })
    .catch(async (response: AxiosResponse) => {
      return response
    })
}

export const saveRegisterTokens = async (data: AuthResponse) => {
  localStorage.setItem('access_token', data.access_token)
  localStorage.setItem('refresh_token', data.refresh_token)
}

export const API_CONSTANTS = {
  HTTP_STATUS: {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  },
} as const
