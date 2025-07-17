import { useParams } from 'next/navigation'

export const useEventParams = () => {
  const params = useParams()
  const idParam = params.id
  const eventId = Array.isArray(idParam) ? Number(idParam[0]) : Number(idParam)

  return { eventId }
}
