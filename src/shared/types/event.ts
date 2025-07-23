export interface EventCardData {
  id: number
  title: string
  date: string
  location: string
  theater: string
  price: number
  imageSrc: string
  imageAlt: string
  ageRating: string
  isPriority?: boolean
  cityId?: number
  showTypeId?: number
  detailedUrl?: string | null
  eventId?: string
}

export interface APIShowData {
  id: string
  externalId: number
  name: string
  detailed_url: string | null
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
  events: APIEventData[]
  showCategories: unknown[]
}

export interface APIEventData {
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
  building: {
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
}

export interface EventsResponse {
  success: boolean
  shows: ShowItem[]
  message?: string
  error?: string
}

export interface NewEventsResponse {
  success: boolean
  data: APIShowData[]
  message?: string
  error?: string
}

export interface ShowItem {
  id: number
  name: string
  image: string
  min_price: string
  age_limit: number
  events: EventItem[]
  duration?: number
  short_info?: string
}

export interface EventItem {
  id: number
  date: string
  address: string
  age_limit: number
  building: {
    name: string
  }
  location_name: string
  count: number
  min_price?: string
  max_price?: string
}

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
  cityId: number
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

export interface ParsedEventData {
  eventId: number
  cityId?: number
  showTypeId?: number
}

export interface ParsedShowsResponse {
  shows: Show[]
}

export type ShowWithParsedData = Show & { parsedData: ParsedEventData | null }

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

export type ParsedShowsResponseArray = Show[]
