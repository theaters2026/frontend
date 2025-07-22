import { roundToInteger } from './number'
import { UI_CONSTANTS } from '@/shared/constants'

export const formatPriceRange = (
  minPrice?: string | number,
  maxPrice?: string | number,
  priceToBeConfirmedText?: string
): string => {
  if (minPrice && maxPrice) {
    return `${roundToInteger(Number(minPrice))} ${UI_CONSTANTS.CURRENCY_SYMBOL} - ${roundToInteger(Number(maxPrice))} ${UI_CONSTANTS.CURRENCY_SYMBOL}`
  }
  return priceToBeConfirmedText || ''
}
