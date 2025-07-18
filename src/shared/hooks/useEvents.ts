import { useEffect, useMemo } from 'react'
import { Show, EventCardData } from '@/shared/types/event'
import { ParsedEventData } from '@/shared/utils/url'
import { useAppDispatch, useAppSelector } from '@/core/store/utils/storeUtils'
import { fetchEventData } from '@/core/store/events'
import { EventService } from '@/core/services/eventService'

interface UseEventsReturn {
  shows: Array<Show & { parsedData: ParsedEventData | null }>
  popularEvents: EventCardData[]
  allEvents: EventCardData[]
  loading: boolean
  error: string | null
  refetch: () => void
  totalCount: number
  originalCount: number
}

export const useEvents = (): UseEventsReturn => {
  const dispatch = useAppDispatch()
  const { shows, loading, error, totalCount, originalCount } = useAppSelector(
    (state) => state.events
  )

  const fetchEvents = () => {
    dispatch(fetchEventData())
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  const popularEvents = useMemo(() => {
    const popularShows = EventService.getPopularShows(shows)
    return EventService.transformShowsToCardData(popularShows)
  }, [shows])

  const allEvents = useMemo(() => {
    const uniqueShows = EventService.getUniqueShows(shows)
    return EventService.transformShowsToCardData(uniqueShows)
  }, [shows])

  return {
    shows,
    popularEvents,
    allEvents,
    loading,
    error,
    refetch: fetchEvents,
    totalCount,
    originalCount,
  }
}
