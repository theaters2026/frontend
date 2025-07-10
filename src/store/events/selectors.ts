import { RootState } from '@/store/store'

export const selectEventsData = (state: RootState) => state.event.data
export const selectEventsLoading = (state: RootState) => state.event.loading
export const selectEventsError = (state: RootState) => state.event.error
