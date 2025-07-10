import { createSlice } from '@reduxjs/toolkit'
import { fetchEventData } from './actions'
import { initialState } from '@/types/events'

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchEventData.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(fetchEventData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default eventSlice.reducer
