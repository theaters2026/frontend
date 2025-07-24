import { useMemo } from 'react'
import { parseHTMLContent } from '@/shared/utils/htmlParser'

export const useHTMLContent = (htmlString: string | null | undefined) => {
  return useMemo(() => parseHTMLContent(htmlString), [htmlString])
}
