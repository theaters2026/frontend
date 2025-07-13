export interface EventMedia {
  id: string
  url: string
  type: string
}

export interface EventDescription {
  id: string
  age: number
  address: string
  price: number
  date: string
  org_name: string
}

export interface Event {
  id: string
  name: string
  description: EventDescription
  media: EventMedia
}

export interface EventState {
  data: Event[] | null
  loading: boolean
  error: string | null
}

export const initialState: EventState = {
  data: null,
  loading: false,
  error: null,
}
