import {
  Event,
  ShowWithParsedData,
  SessionCardData,
} from '@/shared/types/event'

export interface SessionMapperOptions {
  unknownLocationText: string
  unknownAddressText: string
}

export const mapEventToSessionCardData = (
  session: Event,
  event: ShowWithParsedData,
  options: SessionMapperOptions
): SessionCardData => {
  return {
    id: session.id,
    eventId: session.externalId,
    title: session.name,
    date: session.date,
    location: session.building?.name || options.unknownLocationText,
    theater: session.building?.name || options.unknownLocationText,
    address: session.address || options.unknownAddressText,
    minPrice: session.minPrice || '0',
    maxPrice: session.maxPrice || '0',
    cityId: session.cityId,
    showId: session.showId,
    detailedUrl: event.detailed_url,
    showTypeId: parseInt(event.type_num),
    imageSrc: event.image,
    imageAlt: event.name,
    ageRating: `${event.ageLimit}+`,
  }
}

export const mapSessionsToSessionCardData = (
  sessions: Event[],
  event: ShowWithParsedData,
  options: SessionMapperOptions
): SessionCardData[] => {
  return sessions.map((session) =>
    mapEventToSessionCardData(session, event, options)
  )
}
