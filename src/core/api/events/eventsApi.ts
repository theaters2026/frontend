import { ParsedShowsResponse } from '@/shared/types/event'
import { localApi } from '@/core/api/api'
import { CreateEventResponse } from '@/shared/types/createEvent'
import { CreateEventFormValues } from '@/shared/schemas/createEventSchema'

export const getEventsRequest = async (): Promise<ParsedShowsResponse> => {
  try {
    const response = await localApi.get('/shows')
    return response.data
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}

export const createEventApi = async (
  data: CreateEventFormValues
): Promise<CreateEventResponse> => {
  try {
    const response = await localApi.post('/events', data)
    return response.data
  } catch (error) {
    console.error('Error creating event:', error)
    throw new Error('Failed to create event')
  }
}
