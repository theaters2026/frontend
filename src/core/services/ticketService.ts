import { DEFAULT_VALUES } from '@/shared/constants'
import { EventCardData } from '@/shared/types'

export class ticketService {
  static prepareTicketData(eventData: EventCardData) {
    return {
      eventId: Number(eventData.eventId),
      cityId: eventData.cityId || DEFAULT_VALUES.CITY_ID,
      showTypeId: eventData.showTypeId || DEFAULT_VALUES.SHOW_TYPE_ID,
    }
  }

  static purchaseTicket(
    eventData: EventCardData,
    openSchedule: (eventId: number, cityId: number, showTypeId: number) => void
  ) {
    const { eventId, cityId, showTypeId } = this.prepareTicketData(eventData)
    openSchedule(eventId, cityId, showTypeId)
  }
}
