import { z } from 'zod'

export const eventFormSchema = z.object({
  title: z.string().min(2, 'Название слишком короткое').max(100),
  price: z.string().min(1, 'Укажите цену').regex(/^\d+$/, 'Только цифры'),
  date: z.string().min(1, 'Укажите дату'),
  location: z.string().min(2, 'Укажите место проведения'),
  theater: z.string().min(2, 'Укажите заведение'),
  ageRating: z.enum(['0', '6', '12', '16', '18']),
  imageSrc: z.string().optional(),
  imageAlt: z.string().optional(),
  description: z.string().optional(),
})

export type EventFormSchema = z.infer<typeof eventFormSchema>
