export const parseHTMLContent = (
  htmlString: string | null | undefined
): string => {
  if (!htmlString) return ''

  if (!/<[^>]*>/.test(htmlString)) {
    return htmlString
  }

  if (typeof window !== 'undefined') {
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlString, 'text/html')
    return doc.body.textContent || doc.body.innerText || ''
  }

  return htmlString
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/?(p|div|h[1-6])[^>]*>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}
