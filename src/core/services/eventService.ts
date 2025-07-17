import { formatDate, roundToInteger } from '@/shared/utils'
import { UI_CONSTANTS } from '@/shared/constants'
import { ShowItem } from '@/shared/types/event'

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
  static transformShowToCardData(show: ShowItem): EventCardData {
    const firstEvent =
      show.events && show.events.length > 0 ? show.events[0] : null

    return {
      id: show.id,
      title: show.name,
      price: show.min_price ? roundToInteger(parseFloat(show.min_price)) : 0,
      date: firstEvent?.date ? formatDate(firstEvent.date) : 'dateNotSpecified',
      location: firstEvent?.address || 'locationNotSpecified',

      theater: firstEvent?.building?.name || 'theaterNotSpecified',

      imageSrc: show.image || '',
      imageAlt: show.name,
      ageRating: `${show.age_limit || firstEvent?.age_limit || 0}+`,
    }
  }

  static getUniqueShows(shows: ShowItem[]): ShowItem[] {
    if (!shows || shows.length === 0) return []

    const uniqueShows = shows.filter(
      (show, index, self) => index === self.findIndex((s) => s.id === show.id)
    )

    return uniqueShows
  }

  static getPopularShows(shows: ShowItem[]): ShowItem[] {
    const uniqueShows = this.getUniqueShows(shows)
    return uniqueShows.slice(0, UI_CONSTANTS.POPULAR_EVENTS_LIMIT)
  }

  static transformShowsToCardData(shows: ShowItem[]): EventCardData[] {
    if (!shows || shows.length === 0) return []

    return shows.map(this.transformShowToCardData)
  }
}
