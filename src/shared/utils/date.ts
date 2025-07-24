import { isValid, parseISO, format } from 'date-fns'
import { ru } from 'date-fns/locale'

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

  const utcDate = new Date(dateString.replace('Z', ''))

  return format(utcDate, 'd MMMM, EEEEEE, HH:mm', { locale: ru })
}
