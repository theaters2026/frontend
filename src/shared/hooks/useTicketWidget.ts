import { useCallback } from 'react'
import {
  TICKET_MANAGER_CONFIG,
  TICKET_MANAGER_MESSAGES,
} from '@/shared/constants'
import { useScriptLoader } from './useScriptLoader'

interface UseTicketWidgetReturn {
  isLoaded: boolean
  openSchedule: (eventId: number, cityId: number, showTypeId: number) => void
}

export const useTicketWidget = (): UseTicketWidgetReturn => {
  const { isLoaded } = useScriptLoader({
    src: TICKET_MANAGER_CONFIG.SCRIPT_URL,
    async: true,
    onError: (error) => {
      console.error(TICKET_MANAGER_MESSAGES.SCRIPT_NOT_LOADED, error)
    },
  })

  const openSchedule = useCallback(
    (eventId: number, cityId: number, showTypeId: number) => {
      if (!isLoaded) {
        console.warn(TICKET_MANAGER_MESSAGES.SCRIPT_NOT_LOADED)
        return
      }

      try {
        if (typeof window !== 'undefined' && window.ticketManager) {
          window.ticketManager.creationSchedule(
            TICKET_MANAGER_CONFIG.DEFAULT_WIDGET_ID,
            eventId,
            cityId,
            showTypeId
          )
        } else {
          console.error(TICKET_MANAGER_MESSAGES.TICKET_MANAGER_NOT_FOUND)
        }
      } catch (error) {
        console.error(TICKET_MANAGER_MESSAGES.CREATION_SCHEDULE_ERROR, error)
      }
    },
    [isLoaded]
  )

  return {
    isLoaded,
    openSchedule,
  }
}
