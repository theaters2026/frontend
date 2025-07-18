import { ParsedShowsResponse } from '@/shared/types/event'
import { localApi } from '@/core/api/api'

export const getEventsRequest = async (): Promise<ParsedShowsResponse> => {
  try {
    const response = await localApi.get('/shows')
    return response.data
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}
