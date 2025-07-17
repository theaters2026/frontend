import { ShowItem } from '@/shared/types/event'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { fetchEventData } from './eventsActions'

interface EventsState {
  events: ShowItem[]
  currentEvent: ShowItem | null
  statusLoading: boolean
  statusError: string | null
  errorMessage: string
}

const initialState: EventsState = {
  events: [],
  currentEvent: null,
  statusLoading: false,
  statusError: null,
  errorMessage: '',
}

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setCurrentEvent(state, action: PayloadAction<ShowItem>) {
      state.currentEvent = action.payload
    },
    clearCurrentEvent(state) {
      state.currentEvent = null
    },
    clearError(state) {
      state.statusError = null
      state.errorMessage = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventData.pending, (state) => {
        state.statusLoading = true
        state.statusError = null
        state.errorMessage = ''
      })
      .addCase(fetchEventData.fulfilled, (state, action) => {
        state.statusLoading = false
        state.events = action.payload
        state.statusError = null
        state.errorMessage = ''
      })
      .addCase(fetchEventData.rejected, (state, action) => {
        state.statusLoading = false
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

export const { setCurrentEvent, clearCurrentEvent, clearError } =
  eventsSlice.actions

export default eventsSlice.reducer
