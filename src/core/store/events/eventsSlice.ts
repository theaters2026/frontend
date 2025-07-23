import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Show } from '@/shared/types/event'
import { fetchEventData } from './eventsActions'
import { ParsedEventData } from '@/shared/utils'
import { RootState } from '../store'

interface EventsState {
  shows: Array<Show & { parsedData: ParsedEventData | null }>
  events: Array<Show & { parsedData: ParsedEventData | null }>
  currentEvent: (Show & { parsedData: ParsedEventData | null }) | null
  loading: boolean
  statusLoading: boolean
  error: string | null
  statusError: string | null
  errorMessage: string
  totalCount: number
  originalCount: number
}

const initialState: EventsState = {
  shows: [],
  events: [],
  currentEvent: null,
  loading: false,
  statusLoading: false,
  error: null,
  statusError: null,
  errorMessage: '',
  totalCount: 0,
  originalCount: 0,
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
    clearError: (state) => {
      state.error = null
      state.statusError = null
      state.errorMessage = ''
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload
    },
    setOriginalCount: (state, action: PayloadAction<number>) => {
      state.originalCount = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventData.pending, (state) => {
        state.loading = true
        state.statusLoading = true
        state.error = null
        state.statusError = null
        state.errorMessage = ''
      })
      .addCase(fetchEventData.fulfilled, (state, action) => {
        state.loading = false
        state.statusLoading = false
        state.shows = action.payload
        state.events = action.payload
        state.error = null
        state.statusError = null
        state.errorMessage = ''
      })
      .addCase(fetchEventData.rejected, (state, action) => {
        state.loading = false
        state.statusLoading = false
        state.error = action.payload || 'Failed to fetch events'
        state.statusError = 'Error'
        state.errorMessage = action.payload || 'Failed to fetch events'
      })
  },
})

export const selectEventsData = (state: RootState) => state.events.events
export const selectEventsLoading = (state: RootState) =>
  state.events.statusLoading
export const selectEventsError = (state: RootState) => state.events.statusError
export const selectCurrentEvent = (state: RootState) =>
  state.events.currentEvent

export const {
  setCurrentEvent,
  clearCurrentEvent,
  clearError,
  setTotalCount,
  setOriginalCount,
} = eventsSlice.actions

export const eventsReducer = eventsSlice.reducer
export default eventsSlice.reducer
