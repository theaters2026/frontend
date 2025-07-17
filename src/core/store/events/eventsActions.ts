import { createAsyncThunk } from '@reduxjs/toolkit'
import { getEventsRequest } from '@/core/api/events/eventsApi'
import { ShowItem } from '@/shared/types/event'

export const fetchEventData = createAsyncThunk<
  ShowItem[],
  void,
  { rejectValue: string }
>('events/fetchEventData', async (_, { rejectWithValue }) => {
  try {
    const data = await getEventsRequest()
    return data.shows || []
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'Failed to fetch events'
    )
  }
})
