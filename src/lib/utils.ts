import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getImageUrl = (relativePath: string): string => {
  const baseUrl = 'http://localhost:3000'
  return relativePath.startsWith('http')
    ? relativePath
    : `${baseUrl}${relativePath}`
}
export function formatDate(dateString: string): string {
  if (!dateString) return ''

  try {
    const date = new Date(dateString)

    if (isNaN(date.getTime())) {
      return dateString
    }

    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()

    return `${day}.${month}.${year}`
  } catch (error) {
    console.error('Error formatting date:', error)
    return dateString
  }
}

export function formatDateTime(dateString: string): string {
  if (!dateString) return ''

  try {
    const date = new Date(dateString)

    if (isNaN(date.getTime())) {
      return dateString
    }

    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')

    return `${day}.${month}.${year} в ${hours}:${minutes}`
  } catch (error) {
    console.error('Error formatting date time:', error)
    return dateString
  }
}
