import axios, { AxiosInstance, AxiosError } from 'axios'

const createHttpClient = (baseURL: string, timeout = 10000): AxiosInstance => {
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
  process.env.NEXT_PUBLIC_AFISHA_API_URL!,
  15000
)
