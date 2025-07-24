import { isValid, parseISO, format } from 'date-fns'
import { ru } from 'date-fns/locale'

export function parseDate(date: string | Date | undefined): Date | null {
  if (!date) return null

  if (date instanceof Date) {
    return isValid(date) ? date : null
  }

  const dateParsed = parseISO(date)
  const fallbackDate = new Date(date)

  return isValid(dateParsed)
    ? dateParsed
    : isValid(fallbackDate)
      ? fallbackDate
      : null
}

export function formatDate(dateString: string | Date | undefined): string {
  const date = parseDate(dateString)
  if (!date) return ''
  return format(date, 'd MMMM, EEEEEE, HH:mm', { locale: ru })
}

export function formatDateOnly(dateString: string | Date | undefined): string {
  const date = parseDate(dateString)
  if (!date) return ''

  return format(date, 'd MMMM yyyy', { locale: ru })
}

export function formatTimeOnly(time: string | undefined): string {
  if (!time) return ''
  return time
}

export function formatDateAndTime(
  dateString: string | Date | undefined,
  timeString?: string
): { date: string; time: string; combined: string } {
  const formattedDate = formatDateOnly(dateString)
  const formattedTime = formatTimeOnly(timeString)

  return {
    date: formattedDate,
    time: formattedTime,
    combined: `${formattedDate} ${formattedTime}`.trim(),
  }
}

export const getCurrentDateString = (): string => {
  return new Date().toISOString().split('T')[0]
}

export const formatDateForInput = (date: Date | string | undefined): string => {
  if (!date) return ''
  if (date instanceof Date) {
    return date.toISOString().split('T')[0]
  }
  return date
}

export const parseDateFromInput = (dateString: string): Date | '' => {
  return dateString ? new Date(dateString) : ''
}
