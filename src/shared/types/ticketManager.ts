export interface TicketManagerParams {
  widgetId: string
  eventId: number
  cityId: number
  showTypeId: number
}

declare global {
  interface Window {
    ticketManager: {
      // eslint-disable-next-line max-params
      creationSchedule: (
        widgetId: string,
        eventId: number,
        cityId: number,
        showTypeId: number
      ) => void
    }
  }
}
