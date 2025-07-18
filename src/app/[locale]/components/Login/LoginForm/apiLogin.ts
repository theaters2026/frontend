'use client'

import axios, { type AxiosResponse } from 'axios'
import { LoginFormSchema } from './loginForm.schema'

type AuthType = {
  username: string
  password: string
  email: string
}

type DataType = {
  access_token: string
  refresh_token: string
}

const API = process.env['NEXT_PUBLIC_LOCAL_API_URL']

const register = async (data: LoginFormSchema) => {
  return await axios
    .post<AuthType>(`${API}/auth/register`, {
      username: data.username,
      password: data.password,
      email: data.email,
    })
    .then((response: AxiosResponse) => {
      return response
    })
    .catch(async (response: AxiosResponse) => {
      return response
    })
}

export const login = async (data: LoginFormSchema) => {
  return await axios
    .post<AuthType>(`${API}/auth/login`, {
      username: data.username,
      password: data.password,
      email: data.email,
    })
    .then((response: AxiosResponse) => {
      return response
    })
    .catch(async (response: AxiosResponse) => {
      return await register(data)
    })
}

export const saveLoginTokens = async (data: DataType) => {
  localStorage.setItem('access_token', data.access_token)
  localStorage.setItem('refresh_token', data.refresh_token)
}
