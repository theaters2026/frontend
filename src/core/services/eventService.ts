import { ShowWithParsedData } from '@/shared/types/event'
import { formatDate, roundToInteger } from '@/shared/utils'
import { UI_CONSTANTS } from '@/shared/constants'

export interface EventCardData {
  id: number
  title: string
  price: number
  date: string
  location: string
  theater: string
  imageSrc: string
  imageAlt: string
  ageRating: string
}

export class EventService {
  static transformShowToCardData(show: ShowWithParsedData): EventCardData {
    const firstEvent =
      show.events && show.events.length > 0 ? show.events[0] : null

    return {
      id: parseInt(show.id),
      title: show.name,
      price: show.minPrice ? roundToInteger(parseFloat(show.minPrice)) : 0,
      date: firstEvent?.date ? formatDate(firstEvent.date) : 'dateNotSpecified',
      location: firstEvent?.address || 'locationNotSpecified',
      theater: firstEvent?.building?.name || 'theaterNotSpecified',
      imageSrc: show.image || '',
      imageAlt: show.name,
      ageRating: `${show.ageLimit || firstEvent?.ageLimit || 0}+`,
    }
  }

  static getUniqueShows(shows: ShowWithParsedData[]): ShowWithParsedData[] {
    if (!shows || shows.length === 0) return []

    const uniqueShows = shows.filter(
      (show, index, self) => index === self.findIndex((s) => s.id === show.id)
    )

    return uniqueShows
  }

  static getPopularShows(shows: ShowWithParsedData[]): ShowWithParsedData[] {
    const uniqueShows = this.getUniqueShows(shows)
    return uniqueShows.slice(0, UI_CONSTANTS.POPULAR_EVENTS_LIMIT)
  }

  static transformShowsToCardData(
    shows: ShowWithParsedData[]
  ): EventCardData[] {
    if (!shows || shows.length === 0) return []

    return shows.map(this.transformShowToCardData)
  }
}
