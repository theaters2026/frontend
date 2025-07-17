import { useAppDispatch, useAppSelector } from '@/core/store/utils/storeUtils'
import { useEffect } from 'react'
import { fetchEventData } from '@/core/store/events/eventsActions'
import {
  selectEventsData,
  selectEventsLoading,
  selectEventsError,
} from '@/core/store/events/eventsSlice'
import { EventService, EventCardData } from '@/core/services/eventService'

export interface UseEventsReturn {
  popularEvents: EventCardData[]
  allEvents: EventCardData[]
  loading: boolean
  error: string | null
  refetch: () => void
}

export const useEvents = (): UseEventsReturn => {
  const dispatch = useAppDispatch()
  const shows = useAppSelector(selectEventsData)
  const loading = useAppSelector(selectEventsLoading)
  const error = useAppSelector(selectEventsError)

  const refetch = () => {
    dispatch(fetchEventData())
  }

  useEffect(() => {
    dispatch(fetchEventData())
  }, [dispatch])

  const popularShowsData = EventService.getPopularShows(shows)
  const allShowsData = EventService.getUniqueShows(shows)

  const popularCards = EventService.transformShowsToCardData(popularShowsData)
  const allCards = EventService.transformShowsToCardData(allShowsData)

  return {
    popularEvents: popularCards,
    allEvents: allCards,
    loading,
    error,
    refetch,
  }
}
