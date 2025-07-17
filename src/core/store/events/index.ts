import eventsReducer from './eventsSlice'
import * as eventsActions from './eventsActions'

export { eventsReducer, eventsActions }
export { fetchEventData } from './eventsActions'
export {
  selectEventsData,
  selectEventsLoading,
  selectEventsError,
} from './eventsSlice'
export default eventsReducer
