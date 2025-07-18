export interface Show {
  id: string
  externalId: number
  name: string
  detailed_url: string
  type_num: string
  image: string
  desc: string | null
  partnerId: number
  ageLimit: number
  shortInfo: string
  fullInfo: string
  publDate: string | null
  premiereDate: string | null
  duration: string
  minPrice: string
  maxPrice: string
  isPushkin: boolean
  shopId: string
  createdAt: string
  updatedAt: string
  events: Event[]
}

export interface Event {
  id: string
  externalId: number
  name: string
  showId: number
  timeType: number
  date: string
  fixDate: string
  endDate: string
  timestamp: string
  timezone: string | null
  isPushkin: boolean
  locationId: number
  locationName: string
  serviceName: string | null
  count: number
  minPrice: string
  maxPrice: string
  image: string
  ageLimit: number
  desc: string | null
  onlyPrivateSells: boolean
  isSeason: boolean
  isCovidFree: boolean
  isHideTime: boolean
  pipelineEventId: number
  isAccessOnlyLink: boolean
  cityId: number // Теперь приходит с бэкенда
  address: string
  createdAt: string
  updatedAt: string
  showUuid: string
  buildingId: string
  building: Building
}

export interface Building {
  id: string
  externalId: number
  name: string
  cityId: number
  address: string
  lat: string
  lon: string
  createdAt: string
  updatedAt: string
}

export interface EventCardData {
  id: number
  title: string
  imageSrc: string
  imageAlt: string
  price: number
  date: string
  location: string
  theater: string
  ageRating: string
  detailedUrl: string | null
  eventId: string
  cityId?: number
  showTypeId?: number
}

export interface ParsedShowsResponse {
  shows: Show[]
}

export type ParsedShowsResponseArray = Show[]
