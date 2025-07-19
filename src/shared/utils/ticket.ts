import { SessionCardData } from '@/shared/types/event'
import { parseDetailedUrl } from './url'

export interface TicketData {
  eventId: number
  cityId: number
  showTypeId: number
}

export const prepareTicketData = (
  sessionData: SessionCardData
): TicketData | null => {
  const parsedData = parseDetailedUrl(sessionData.detailedUrl)

  const eventId = parsedData?.eventId || sessionData.eventId
  const cityId = parsedData?.cityId || sessionData.cityId
  const showTypeId = sessionData.showTypeId || parsedData?.showTypeId

  return eventId && cityId && showTypeId
    ? { eventId, cityId, showTypeId }
    : null
}

export const validateTicketData = (
  data: TicketData | null
): data is TicketData => {
  return data !== null
}
