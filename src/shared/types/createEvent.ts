export interface CreateEventRequest {
  eventName: string
  eventDate: Date
  eventTime: string
  ticketPrice: number
  ageRating: string
  venue: string
  theaterName: string
  image: string
  description: string
}

export interface CreateEventResponse {
  success: boolean
  eventId?: number
  message?: string
  error?: string
}

export interface CreateEventFormState {
  isLoading: boolean
  isSuccess: boolean
  error: string | null
}
