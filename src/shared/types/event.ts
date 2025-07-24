export interface EventCardData {
  id: number
  externalId: number
  title: string
  date: string
  location: string
  theater: string
  price: number
  imageSrc: string
  imageAlt: string
  ageRating: string
  detailedUrl?: string | null
  eventId?: string
  cityId?: number
  showTypeId?: number
  isPriority?: boolean
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
  cityId: number
  address: string
  createdAt: string
  updatedAt: string
  showUuid: string
  buildingId: string
  building: Building
}

export interface Show {
  id: string
  externalId: number
  name: string
  detailed_url: string | null
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

export interface ParsedEventData {
  eventId: number
  cityId?: number
  showTypeId?: number
}

export interface ParsedShowsResponse {
  shows?: Show[]
  results?: Show[]
}

export type ShowWithParsedData = Show & { parsedData?: ParsedEventData | null }

export interface SessionCardData {
  id: string
  eventId: number
  title: string
  date: string
  location: string
  theater: string
  address: string
  minPrice: string
  maxPrice: string
  cityId: number
  showId: number
  detailedUrl?: string | null
  showTypeId?: number
  imageSrc?: string
  imageAlt?: string
  ageRating?: string
}
