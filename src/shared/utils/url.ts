export interface ParsedEventData {
  eventId: number
  cityId?: number
  showTypeId?: number
}

export const parseDetailedUrl = (
  detailedUrl: string | null | undefined
): ParsedEventData | null => {
  if (!detailedUrl) {
    return null
  }

  const patterns = [
    /\/w\/creations\/([^/]+)\/(\d+)\/(\d+)\/([^/]+)\/https$/,
    /\/w\/creations\/([^/]+)\/(\d+)\/(\d+)\/([^/]+)$/,
    /\/w\/creations\/([^/]+)\/(\d+)\/(\d+)$/,
    /\/w\/creations\/([^/]+)\/(\d+)$/,
    /\/(\d+)\/(\d+)\/(\d+)$/,
    /\/(\d+)\/(\d+)$/,
    /\/(\d+)$/,
  ]

  for (const pattern of patterns) {
    const match = detailedUrl.match(pattern)
    if (match) {
      const numbers = match
        .slice(1)
        .map((str) => parseInt(str))
        .filter((num) => !isNaN(num))

      if (numbers.length >= 1) {
        return {
          eventId: numbers[0],
          cityId: numbers[1] || undefined,
          showTypeId: numbers[2] || undefined,
        }
      }
    }
  }

  console.error(
    'parseDetailedUrl: URL не соответствует ни одному паттерну:',
    detailedUrl
  )
  return null
}
