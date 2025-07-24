import { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/core/store/store'
import { setCurrentEvent } from '@/core/store/events/eventsSlice'
import { ShowWithParsedData } from '@/shared/types/event'
import { useEvents } from './useEvents'

interface UseEventDetailReturn {
  event: ShowWithParsedData | null
  loading: boolean
  error: string | null
  refetch: () => void
  isNotFound: boolean
}

export const useEventDetail = (eventId: number): UseEventDetailReturn => {
  const dispatch = useDispatch()
  const currentEvent = useSelector(
    (state: RootState) => state.events.currentEvent
  )
  const { shows, loading, error, refetch } = useEvents()
  const [isNotFound, setIsNotFound] = useState(false)

  const foundEvent = useMemo(() => {
    if (!eventId || eventId === 0 || shows.length === 0) return null

    return (
      shows.find((event: ShowWithParsedData) => {
        const eventIdNumber = Number(event.id)
        return (
          eventIdNumber === eventId ||
          event.externalId === eventId ||
          Number(event.externalId) === eventId
        )
      }) || null
    )
  }, [eventId, shows])

  useEffect(() => {
    if (!eventId || eventId === 0) {
      setIsNotFound(false)
      return
    }

    if (foundEvent) {
      dispatch(setCurrentEvent(foundEvent))
      setIsNotFound(false)
    } else if (!loading && shows.length > 0) {
      setIsNotFound(true)
    }
  }, [eventId, foundEvent, loading, shows.length, dispatch])

  const event = foundEvent || currentEvent

  return {
    event,
    loading,
    error: error || (isNotFound ? 'Event not found' : null),
    refetch,
    isNotFound,
  }
}
