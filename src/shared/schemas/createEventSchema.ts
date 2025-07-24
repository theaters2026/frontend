import { z } from 'zod'
import { FORM_CONSTRAINTS, FORM_VALIDATION } from '@/shared/constants'

export const createEventSchemaFactory = (t: (key: string) => string) => {
  return z.object({
    eventName: z
      .string({ message: t('validation.eventName.required') })
      .min(1, t('validation.eventName.required'))
      .max(
        FORM_VALIDATION.MAX_FIELD_LENGTH,
        t('validation.eventName.maxLength')
      ),

    ticketPrice: z
      .number({ message: t('validation.ticketPrice.invalid') })
      .min(FORM_CONSTRAINTS.TICKET_PRICE_MIN, t('validation.ticketPrice.min'))
      .max(FORM_CONSTRAINTS.TICKET_PRICE_MAX, t('validation.ticketPrice.max')),

    ageRating: z
      .string({ message: t('validation.ageRating.required') })
      .min(1, t('validation.ageRating.required')),

    eventDate: z
      .date({ message: t('validation.eventDate.invalid') })
      .refine((date) => date > new Date(), {
        message: t('validation.eventDate.future'),
      }),

    eventTime: z
      .string({ message: t('validation.eventTime.required') })
      .min(1, t('validation.eventTime.required'))
      .regex(
        /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
        t('validation.eventTime.format')
      ),

    venue: z
      .string({ message: t('validation.venue.required') })
      .min(1, t('validation.venue.required'))
      .max(
        FORM_VALIDATION.MAX_FIELD_LENGTH * 2,
        t('validation.venue.maxLength')
      ),

    theaterName: z
      .string({ message: t('validation.theaterName.required') })
      .min(1, t('validation.theaterName.required'))
      .max(
        FORM_VALIDATION.MAX_FIELD_LENGTH,
        t('validation.theaterName.maxLength')
      ),

    image: z.string().optional(),

    description: z
      .string({ message: t('validation.description.required') })
      .min(10, t('validation.description.minLength'))
      .max(
        FORM_VALIDATION.MAX_FIELD_LENGTH * 10,
        t('validation.description.maxLength')
      ),
  })
}

export type CreateEventFormValues = z.infer<
  ReturnType<typeof createEventSchemaFactory>
>
