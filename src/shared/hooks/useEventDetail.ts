import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/core/store/store'
import { setCurrentEvent } from '@/core/store/events/eventsSlice'
import { ShowWithParsedData } from '@/shared/types/event'
import { useEvents } from './useEvents'

export const useEventDetail = (eventId: number) => {
  const dispatch = useDispatch()
  const events = useSelector((state: RootState) => state.events.events)
  const currentEvent = useSelector(
    (state: RootState) => state.events.currentEvent
  )
  const { loading, error, refetch } = useEvents()
  const [event, setEvent] = useState<ShowWithParsedData | null>(null)
  const [eventNotFound, setEventNotFound] = useState(false)

  useEffect(() => {
    if (!eventId || eventId === 0) {
      return
    }
    if (events.length > 0) {
      const foundEvent = events.find((event: ShowWithParsedData) => {
        const eventIdMatches =
          parseInt(event.id) === eventId ||
          event.externalId === eventId ||
          parseInt(event.externalId?.toString() || '0') === eventId
        return eventIdMatches
      })

      if (foundEvent) {
        setEvent(foundEvent)
        setEventNotFound(false)
        dispatch(setCurrentEvent(foundEvent))
      } else {
        setEventNotFound(true)
      }
    } else if (!loading) {
      refetch()
    }
  }, [eventId, events, dispatch, refetch, loading])

  useEffect(() => {
    if (
      currentEvent &&
      (parseInt(currentEvent.id) === eventId ||
        currentEvent.externalId === eventId ||
        parseInt(currentEvent.externalId?.toString() || '0') === eventId)
    ) {
      setEvent(currentEvent)
      setEventNotFound(false)
    }
  }, [currentEvent, eventId])

  return {
    event,
    loading,
    error: error || (eventNotFound ? 'Event not found' : null),
    refetch,
  }
}
