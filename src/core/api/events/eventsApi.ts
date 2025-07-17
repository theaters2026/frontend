import { EventsResponse } from '@/shared/types/event'

export const getEventsRequest = async (): Promise<EventsResponse> => {
  try {
    const response = await fetch('/api/events', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}
