import { useEffect, useMemo } from 'react'
import { Show, EventCardData } from '@/shared/types/event'
import { ParsedEventData } from '@/shared/utils/url'
import { useAppDispatch, useAppSelector } from '@/core/store/utils/storeUtils'
import { fetchEventData } from '@/core/store/events/eventsActions'
import {
  selectEventsData,
  selectEventsLoading,
  selectEventsError,
} from '@/core/store/events/eventsSlice'
import { EventService } from '@/core/services/eventService'

export interface UseEventsReturn {
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
  const shows = useAppSelector(selectEventsData)
  const loading = useAppSelector(selectEventsLoading)
  const error = useAppSelector(selectEventsError)
  const { totalCount, originalCount } = useAppSelector((state) => state.events)

  const refetch = () => {
    dispatch(fetchEventData())
  }

  useEffect(() => {
    dispatch(fetchEventData())
  }, [dispatch])

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
    refetch,
    totalCount,
    originalCount,
  }
}
