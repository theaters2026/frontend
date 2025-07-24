import axios, { AxiosInstance, AxiosError } from 'axios'
import { API_TIMEOUTS } from '@/shared/constants'

const createHttpClient = (
  baseURL: string,
  timeout = API_TIMEOUTS.DEFAULT
): AxiosInstance => {
  const client = axios.create({
    baseURL,
    timeout,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  client.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      console.error('HTTP Error:', {
        url: error.config?.url,
        status: error.response?.status,
        message: error.message,
      })
      return Promise.reject(error)
    }
  )

  return client
}

export const localApi = createHttpClient(process.env.NEXT_PUBLIC_LOCAL_API_URL!)
export const afishaApi = createHttpClient(
  process.env.NEXT_PUBLIC_AFISHA_API_URL!
)
