export const TICKET_MANAGER_CONFIG = {
  SCRIPT_URL: process.env.NEXT_PUBLIC_TICKET_MANAGER_SCRIPT_URL || '',
  DEFAULT_WIDGET_ID: process.env.NEXT_PUBLIC_TICKET_MANAGER_WIDGET_ID || '',
} as const

export const TICKET_MANAGER_MESSAGES = {
  SCRIPT_LOADED: 'TicketManager script loaded via hook',
  SCRIPT_ERROR: 'Error loading ticketManager script via hook',
  SCRIPT_NOT_LOADED: 'TicketManager script is not loaded yet',
  TICKET_MANAGER_NOT_FOUND: 'ticketManager not found',
  CREATION_SCHEDULE_ERROR: 'Error calling creationSchedule:',
  OPENING_SCHEDULE: 'Opening schedule for:',
} as const
