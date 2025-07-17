import { ShowItem } from '@/shared/types/event'
import { UI_CONSTANTS } from '@/shared/constants'

export const useEventSessions = (event: ShowItem) => {
  const hasSessions = event.events && event.events.length > 0
  const sessionsToShow =
    event.events?.slice(0, UI_CONSTANTS.SESSIONS_LIMIT) || []

  return {
    hasSessions,
    sessionsToShow,
  }
}
