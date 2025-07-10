import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { fetchEvents } from '@/lib/api/services/events/events.service'

interface ErrorResponse {
  message?: string
}

export const fetchEventData = createAsyncThunk(
  'event/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchEvents()
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>
      return rejectWithValue(
        err.response?.data?.message || 'Failed to fetch events'
      )
    }
  }
)
