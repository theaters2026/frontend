// shared/hooks/useEvents.ts
import { useEffect, useMemo, useCallback } from 'react'
import { Show, EventCardData } from '@/shared/types/event'
import { ParsedEventData } from '@/shared/utils/url'
import { useAppDispatch, useAppSelector } from '@/core/store/utils/storeUtils'
import { fetchEventData } from '@/core/store/events/eventsActions'
import {
  selectEventsData,
  selectEventsLoading,
  selectEventsError,
  selectEventsStatus,
} from '@/core/store/events/eventsSlice'
import { EventService } from '@/core/services/eventService'

export interface UseEventsReturn {
  shows: Array<Show & { parsedData: ParsedEventData | null }>
  popularEvents: EventCardData[]
  allEvents: EventCardData[]
  loading: boolean
  error: string | null
  refetch: () => void
  isSuccess: boolean
  isEmpty: boolean
}

export const useEvents = (): UseEventsReturn => {
  const dispatch = useAppDispatch()
  const shows = useAppSelector(selectEventsData)
  const loading = useAppSelector(selectEventsLoading)
  const error = useAppSelector(selectEventsError)
  const status = useAppSelector(selectEventsStatus)

  const refetch = useCallback(() => {
    dispatch(fetchEventData())
  }, [dispatch])

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEventData())
    }
  }, [dispatch, status])

  const { popularEvents, allEvents } = useMemo(() => {
    const popularShows = EventService.getPopularShows(shows)
    const uniqueShows = EventService.getUniqueShows(shows)

    return {
      popularEvents: EventService.transformShowsToCardData(popularShows),
      allEvents: EventService.transformShowsToCardData(uniqueShows),
    }
  }, [shows])

  return {
    shows,
    popularEvents,
    allEvents,
    loading,
    error,
    refetch,
    isSuccess: status === 'succeeded',
    isEmpty: shows.length === 0 && status === 'succeeded',
  }
}
