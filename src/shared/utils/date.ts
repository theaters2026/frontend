import { format, isValid, parseISO } from 'date-fns'

export function parseDate(date: string): Date | null {
  if (!date) return null
  const dateParsed = parseISO(date)

  const fallbackDate = new Date(date)

  return isValid(dateParsed)
    ? dateParsed
    : isValid(fallbackDate)
      ? fallbackDate
      : null
}

export function formatDate(dateString: string): string {
  const date = parseDate(dateString)

  if (!date) return ''
  return format(date, 'dd.MM.yyyy HH:mm')
}
