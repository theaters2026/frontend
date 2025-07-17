import { useTranslations } from 'next-intl'

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
      ? common('locationNotSpecified')
      : location

  const localizedDate =
    date === 'dateNotSpecified' ? common('dateNotSpecified') : date

  const localizedTheater =
    theater === 'theaterNotSpecified' ? common('theaterNotSpecified') : theater

  return {
    localizedLocation,
    localizedDate,
    localizedTheater,
  }
}
