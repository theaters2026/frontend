import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/core/store/store'
import { setCurrentEvent } from '@/core/store/events/eventsSlice'
import { ShowItem } from '@/shared/types/event'
import { useEvents } from './useEvents'

export const useEventDetail = (eventId: number) => {
  const dispatch = useDispatch()
  const events = useSelector((state: RootState) => state.events.events) // Используем полные данные из Redux
  const currentEvent = useSelector(
    (state: RootState) => state.events.currentEvent
  )
  const { loading, error, refetch } = useEvents()
  const [event, setEvent] = useState<ShowItem | null>(null)

  useEffect(() => {
    if (events.length > 0) {
      const foundEvent = events.find((event: ShowItem) => event.id === eventId)
      if (foundEvent) {
        setEvent(foundEvent)
        dispatch(setCurrentEvent(foundEvent))
      }
    } else {
      refetch()
    }
  }, [eventId, events, dispatch, refetch])

  useEffect(() => {
    if (currentEvent && currentEvent.id === eventId) {
      setEvent(currentEvent)
    }
  }, [currentEvent, eventId])

  return {
    event,
    loading,
    error,
    refetch,
  }
}
