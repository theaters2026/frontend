import { combineReducers } from '@reduxjs/toolkit'
import eventReducer from './events/eventsSlice'

const rootReducer = combineReducers({
  event: eventReducer,
})

export default rootReducer
