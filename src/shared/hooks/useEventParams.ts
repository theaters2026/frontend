import { useParams } from 'next/navigation'

export const useEventParams = () => {
  const params = useParams()
  const eventId = params.id ? Number(params.id) : 0

  return {
    eventId,
    locale: params.locale as string,
    isValidId: eventId > 0,
  }
}
