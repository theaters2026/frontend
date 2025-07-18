import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Show } from '@/shared/types/event'
import { fetchEventData } from './eventsActions'
import { ParsedEventData } from '@/shared/utils'

interface EventsState {
  shows: Array<Show & { parsedData: ParsedEventData | null }>
  loading: boolean
  error: string | null
  totalCount: number
  originalCount: number
}

const initialState: EventsState = {
  shows: [],
  loading: false,
  error: null,
  totalCount: 0,
  originalCount: 0,
}

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
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
        state.error = null
      })
      .addCase(fetchEventData.fulfilled, (state, action) => {
        state.loading = false
        state.shows = action.payload
        state.error = null
      })
      .addCase(fetchEventData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Failed to fetch events'
      })
  },
})

export const { clearError, setTotalCount, setOriginalCount } =
  eventsSlice.actions
export const eventsReducer = eventsSlice.reducer
