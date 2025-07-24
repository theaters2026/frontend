import { useState } from 'react'

interface CreateEventFormState {
  isLoading: boolean
  isSuccess: boolean
  error: string | null
}

export const useCreateEvent = () => {
  const [state, setState] = useState<CreateEventFormState>({
    isLoading: false,
    isSuccess: false,
    error: null,
  })

  const createEvent = async (data: FormData) => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: null,
      isSuccess: false,
    }))
    //Здесь будет логика отправки данных на сервер
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.2) {
            resolve({
              id: Date.now(),
              message: 'Event created successfully',
              data: Object.fromEntries(data.entries()),
            })
          } else {
            reject(new Error('Server temporarily unavailable'))
          }
        }, 2000)
      })

      setState({
        isLoading: false,
        isSuccess: true,
        error: null,
      })

      console.log('📝 Event data:', Object.fromEntries(data.entries()))

      return { success: true, id: Date.now() }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred'

      setState({
        isLoading: false,
        isSuccess: false,
        error: errorMessage,
      })
      throw error
    }
  }

  return {
    ...state,
    createEvent,
  }
}
