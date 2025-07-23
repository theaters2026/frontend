import { ShowWithParsedData } from '@/shared/types/event'

export class EventDataService {
  static getFirstSession(event: ShowWithParsedData) {
    return event.events?.[0] || null
  }

  static getEventDate(event: ShowWithParsedData): string | null {
    const firstSession = this.getFirstSession(event)
    return firstSession?.date || null
  }

  static getLocationName(event: ShowWithParsedData): string | null {
    const firstSession = this.getFirstSession(event)
    return firstSession?.building?.name || null
  }

  static getEventSummary(event: ShowWithParsedData) {
    return {
      firstSession: this.getFirstSession(event),
      eventDate: this.getEventDate(event),
      locationName: this.getLocationName(event),
    }
  }
}
