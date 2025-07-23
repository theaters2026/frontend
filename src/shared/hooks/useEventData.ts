import { ShowWithParsedData } from '@/shared/types/event'
import { useTranslations } from 'next-intl'
import { EventDataService } from '@/core/services/eventDataService'
import { formatDate } from '@/shared/utils'

export const useEventData = (event: ShowWithParsedData) => {
  const t = useTranslations('EventDetails')

  const eventSummary = EventDataService.getEventSummary(event)

  const formattedEventDate = eventSummary.eventDate
    ? formatDate(eventSummary.eventDate)
    : t('dateNotSpecified')

  const formattedLocationName =
    eventSummary.locationName || t('locationNotSpecified')

  return {
    firstSession: eventSummary.firstSession,
    eventDate: formattedEventDate,
    locationName: formattedLocationName,
  }
}
