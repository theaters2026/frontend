import { useEffect, useState } from 'react'
import type { TicketManagerParams } from '../types'
import {
  TICKET_MANAGER_CONFIG,
  TICKET_MANAGER_MESSAGES,
} from '@/shared/constants'

interface UseTicketWidgetReturn {
  isLoaded: boolean
  openSchedule: (eventId: string, cityId: number, showTypeId: number) => void
}

export const useTicketWidget = (): UseTicketWidgetReturn => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ticketManager) {
      setIsLoaded(true)
      return
    }

    const existingScript = document.querySelector(
      `script[src="${TICKET_MANAGER_CONFIG.SCRIPT_URL}"]`
    )
    if (existingScript) {
      existingScript.addEventListener('load', () => setIsLoaded(true))
      return
    }

    const script = document.createElement('script')
    script.src = TICKET_MANAGER_CONFIG.SCRIPT_URL
    script.async = true
    script.onload = () => {
      setIsLoaded(true)
    }

    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  const openSchedule = (
    eventId: string,
    cityId: number,
    showTypeId: number
  ) => {
    if (!isLoaded) {
      return
    }

    try {
      if (typeof window !== 'undefined' && window.ticketManager) {
        const params: TicketManagerParams = {
          widgetId: TICKET_MANAGER_CONFIG.DEFAULT_WIDGET_ID,
          eventId,
          cityId,
          showTypeId,
        }

        window.ticketManager.creationSchedule(params)
      } else {
        console.error(TICKET_MANAGER_MESSAGES.TICKET_MANAGER_NOT_FOUND)
      }
    } catch (error) {
      console.error(TICKET_MANAGER_MESSAGES.CREATION_SCHEDULE_ERROR, error)
    }
  }

  return {
    isLoaded,
    openSchedule,
  }
}
