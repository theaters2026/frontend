import { CreateEventFormValues } from '@/shared/schemas/createEventSchema'

export const createEventFormData = (
  values: CreateEventFormValues,
  selectedImage: File | null
): FormData => {
  const formData = new FormData()

  formData.append('eventName', values.eventName)
  formData.append('ticketPrice', values.ticketPrice.toString())
  formData.append('ageRating', values.ageRating)
  formData.append('eventDate', values.eventDate.toISOString())
  formData.append('eventTime', values.eventTime)
  formData.append('venue', values.venue)
  formData.append('theaterName', values.theaterName)
  formData.append('description', values.description)

  if (selectedImage) {
    formData.append('image', selectedImage)
  }

  return formData
}
