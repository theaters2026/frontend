import { useTranslations } from 'next-intl'
import { formatDate } from '@/shared/utils/date'

interface UseEventCardProps {
  date: string
  location: string
  theater: string
}

export const useEventCard = ({
  date,
  location,
  theater,
}: UseEventCardProps) => {
  const common = useTranslations('Common')

  const localizedLocation =
    location === 'locationNotSpecified'
      ? common('defaultValues.locationNotSpecified')
      : location

  const localizedDate =
    date === 'dateNotSpecified'
      ? common('defaultValues.dateNotSpecified')
      : formatDate(date)

  const localizedTheater =
    theater === 'theaterNotSpecified'
      ? common('defaultValues.theaterNotSpecified')
      : theater

  return {
    localizedLocation,
    localizedDate,
    localizedTheater,
  }
}
