import { Show, EventCardData } from '@/shared/types/event'
import { parseDetailedUrl } from '@/shared/utils/url'
import { roundToInteger } from '@/shared/utils'
import { UI_CONSTANTS } from '@/shared/constants'

export class EventService {
  static getPopularShows(shows: Show[]): Show[] {
    const uniqueShows = this.getUniqueShows(shows)
    return uniqueShows.slice(0, UI_CONSTANTS.POPULAR_EVENTS_LIMIT)
  }

  static getUniqueShows(shows: Show[]): Show[] {
    if (!shows || shows.length === 0) return []

    const seen = new Set<string>()
    return shows.filter((show) => {
      if (seen.has(show.id)) {
        return false
      }
      seen.add(show.id)
      return true
    })
  }

  static transformShowToCardData(show: Show): EventCardData {
    const firstEvent = show.events?.[0] || null
    const parsedUrl = parseDetailedUrl(show.detailed_url)

    return {
      id: Number(show.id),
      externalId: show.externalId,
      title: show.name,
      price: show.minPrice ? roundToInteger(Number(show.minPrice)) : 0,
      date: firstEvent?.date || 'dateNotSpecified',
      location:
        firstEvent?.address ||
        firstEvent?.locationName ||
        'locationNotSpecified',
      theater: firstEvent?.building?.name || 'theaterNotSpecified',
      imageSrc: show.image || '',
      imageAlt: show.name,
      ageRating: `${show.ageLimit || firstEvent?.ageLimit || 0}+`,
      detailedUrl: show.detailed_url,
      eventId: String(parsedUrl?.eventId || show.externalId),
      cityId: firstEvent?.cityId,
      showTypeId: Number(show.type_num) || undefined,
    }
  }

  static transformShowsToCardData(shows: Show[]): EventCardData[] {
    if (!shows || shows.length === 0) return []
    return shows.map(this.transformShowToCardData)
  }
}
