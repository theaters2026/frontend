import { Show, ShowWithParsedData, EventCardData } from '@/shared/types/event'
import { parseDetailedUrl } from '@/shared/utils/url'
import { formatDate, roundToInteger } from '@/shared/utils'
import { UI_CONSTANTS } from '@/shared/constants'

export class EventService {
  static getPopularShows(shows: Show[]): Show[] {
    const uniqueShows = this.getUniqueShows(shows)
    return uniqueShows.slice(0, UI_CONSTANTS.POPULAR_EVENTS_LIMIT)
  }

  static getUniqueShows(shows: Show[]): Show[] {
    if (!shows || shows.length === 0) return []

    const uniqueShows = shows.filter(
      (show, index, self) => index === self.findIndex((s) => s.id === show.id)
    )
    return uniqueShows
  }

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

  static transformShowsToCardData(shows: Show[]): EventCardData[] {
    if (!shows || shows.length === 0) return []

    return shows.map((show) => {
      const parsedUrl = parseDetailedUrl(show.detailed_url)
      const cityId =
        show.events && show.events.length > 0
          ? show.events[0].cityId
          : undefined

      const eventCardData: EventCardData = {
        id: show.externalId,
        title: show.name,
        imageSrc: show.image,
        imageAlt: show.name,
        price: show.minPrice ? parseInt(show.minPrice) : 0,
        date: show.events && show.events.length > 0 ? show.events[0].date : '',
        location:
          show.events && show.events.length > 0
            ? show.events[0].address || ''
            : '',
        theater:
          show.events && show.events.length > 0
            ? show.events[0].building?.name || ''
            : '',
        ageRating: show.ageLimit ? show.ageLimit.toString() + '+' : '0+',
        detailedUrl: show.detailed_url || null,
        eventId: String(
          parsedUrl?.eventId ||
            (typeof show.id === 'string' ? parseInt(show.id) : show.id)
        ),
        cityId: cityId,
        showTypeId: parseInt(show.type_num),
      }

      return eventCardData
    })
  }
}
