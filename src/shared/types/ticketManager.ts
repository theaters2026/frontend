export interface TicketManagerParams {
  widgetId: string
  eventId: string
  cityId: number
  showTypeId: number
}

export interface TicketManager {
  creationSchedule: (params: TicketManagerParams) => void
}

declare global {
  interface Window {
    ticketManager?: TicketManager
  }
}
