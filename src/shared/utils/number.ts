import { FORM_CONSTRAINTS } from '@/shared/constants'

export const validateTicketPrice = (value: string): number | undefined => {
  if (value === '') return undefined

  const numValue = Number(value)
  if (
    !isNaN(numValue) &&
    numValue >= FORM_CONSTRAINTS.TICKET_PRICE_MIN &&
    numValue <= FORM_CONSTRAINTS.TICKET_PRICE_MAX
  ) {
    return numValue
  }

  return undefined
}

export const formatTicketPriceValue = (value: number | undefined): string => {
  return value === undefined ? '' : value.toString()
}

export const roundToInteger = (value: number): number => {
  return Math.round(value)
}
