import { ShowItem } from '@/shared/types/event'
import { useTranslations } from 'next-intl'

export const useEventData = (event: ShowItem) => {
  const t = useTranslations('EventDetails')

  const firstSession = event.events?.[0]
  const eventDate = firstSession?.date || t('dateNotSpecified')
  const locationName = firstSession?.building?.name || t('locationNotSpecified')

  return {
    firstSession,
    eventDate,
    locationName,
  }
}
