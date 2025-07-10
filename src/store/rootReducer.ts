import { combineReducers } from '@reduxjs/toolkit'
import eventReducer from './events/reducer'

const rootReducer = combineReducers({
  event: eventReducer,
})

export default rootReducer
