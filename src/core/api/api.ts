import axios, { AxiosInstance } from 'axios'

export const localApi: AxiosInstance = axios.create({
  baseURL: process.env['NEXT_PUBLIC_LOCAL_API_URL'],
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const afishaApi: AxiosInstance = axios.create({
  baseURL: process.env['NEXT_PUBLIC_AFISHA_API_URL'],
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})
