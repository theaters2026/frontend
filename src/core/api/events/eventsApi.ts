import { Event } from '@/shared/types/events'
import { instance } from '../api'

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await instance.get<Event[]>('/sync-data/events')
    return response.data
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}
