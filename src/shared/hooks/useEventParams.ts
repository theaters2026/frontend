import { useParams } from 'next/navigation'

export const useEventParams = () => {
  const params = useParams()
  const eventId = params.id ? parseInt(params.id as string) : 0

  return {
    eventId,
    locale: params.locale as string,
  }
}
