import { useState, useEffect } from 'react'
import { UI_CONSTANTS } from '@/shared/constants'

type ImageSize =
  (typeof UI_CONSTANTS.EVENT_CARD_IMAGE)[keyof typeof UI_CONSTANTS.EVENT_CARD_IMAGE]

export const useResponsiveImageSize = () => {
  const [imageSize, setImageSize] = useState<ImageSize>(
    UI_CONSTANTS.EVENT_CARD_IMAGE.SMALL
  )

  useEffect(() => {
    const updateImageSize = () => {
      const width = window.innerWidth
      if (width >= 2560) {
        setImageSize(UI_CONSTANTS.EVENT_CARD_IMAGE.LARGE)
      } else if (width >= 1920) {
        setImageSize(UI_CONSTANTS.EVENT_CARD_IMAGE.MEDIUM)
      } else {
        setImageSize(UI_CONSTANTS.EVENT_CARD_IMAGE.SMALL)
      }
    }

    updateImageSize()
    window.addEventListener('resize', updateImageSize)

    return () => window.removeEventListener('resize', updateImageSize)
  }, [])

  return imageSize
}
