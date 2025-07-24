import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Show } from '@/shared/types/event'
import { fetchEventData } from './eventsActions'
import { ParsedEventData } from '@/shared/utils'
import { RootState } from '../store'

type FetchStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

interface EventsState {
  shows: Array<Show & { parsedData: ParsedEventData | null }>
  currentEvent: (Show & { parsedData: ParsedEventData | null }) | null
  status: FetchStatus
  error: string | null
  totalCount: number
}

const initialState: EventsState = {
  shows: [],
  currentEvent: null,
  status: 'idle',
  error: null,
  totalCount: 0,
}

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setCurrentEvent(
      state,
      action: PayloadAction<Show & { parsedData: ParsedEventData | null }>
    ) {
      state.currentEvent = action.payload
    },
    clearCurrentEvent(state) {
      state.currentEvent = null
    },
    clearError(state) {
      state.error = null
    },
    setTotalCount(state, action: PayloadAction<number>) {
      state.totalCount = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventData.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchEventData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.shows = action.payload
        state.error = null
        state.totalCount = action.payload.length
      })
      .addCase(fetchEventData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || 'Failed to fetch events'
      })
  },
})

export const selectEventsData = (state: RootState) => state.events.shows
export const selectEventsLoading = (state: RootState) =>
  state.events.status === 'loading'
export const selectEventsError = (state: RootState) => state.events.error
export const selectCurrentEvent = (state: RootState) =>
  state.events.currentEvent
export const selectEventsStatus = (state: RootState) => state.events.status

export const { setCurrentEvent, clearCurrentEvent, clearError, setTotalCount } =
  eventsSlice.actions

export default eventsSlice.reducer
