import { createAsyncThunk } from '@reduxjs/toolkit'
import { getEventsRequest } from '@/core/api/events/eventsApi'
import { Show } from '@/shared/types/event'
import { ParsedEventData } from '@/shared/utils/url'

export const fetchEventData = createAsyncThunk<
  Array<Show & { parsedData: ParsedEventData | null }>,
  void,
  { rejectValue: string }
>('events/fetchEventData', async (_, { rejectWithValue }) => {
  try {
    const data = await getEventsRequest()

    if (Array.isArray(data)) {
      return data.map((show) => ({
        ...show,
        parsedData: null,
      }))
    }

    if (data.shows && Array.isArray(data.shows)) {
      return data.shows
    }

    return []
  } catch (error) {
    console.error('fetchEventData error:', error)
    return rejectWithValue(
      error instanceof Error ? error.message : 'Failed to fetch events'
    )
  }
})
