import { Show } from '@/shared/types/event'

export class EventDataService {
  static getFirstSession(event: Show) {
    return event.events?.[0] || null
  }

  static getEventDate(event: Show): string | null {
    const firstSession = this.getFirstSession(event)
    return firstSession?.date || null
  }

  static getLocationName(event: Show): string | null {
    const firstSession = this.getFirstSession(event)
    return firstSession?.locationName || firstSession?.building?.name || null
  }

  static getEventSummary(event: Show) {
    return {
      firstSession: this.getFirstSession(event),
      eventDate: this.getEventDate(event),
      locationName: this.getLocationName(event),
    }
  }
}
