'use client'

import axios, { type AxiosResponse } from 'axios'
import { LoginFormSchema } from './loginForm.schema'

type RespType = {
  username: string
  password: string
  email: string
}

export const register = async (data: LoginFormSchema) => {
  await axios
    .post<RespType>(`http://localhost:3000/auth/register`, {
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
  await axios
    .post<RespType>(`http://localhost:3000/auth/login`, {
      username: data.username,
      password: data.password,
      email: data.email,
    })
    .then((response: AxiosResponse) => {
      return response
    })
    .catch(async (response: AxiosResponse) => {
      return register(data)
    })
}
