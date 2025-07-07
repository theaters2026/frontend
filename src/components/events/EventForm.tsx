'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '../homepage/card/Card'
import {
  ageRatings,
  type EventFormSchema,
  eventFormSchema,
} from './event-form.schema'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const EventForm = () => {
  const form = useForm<EventFormSchema>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: '',
      price: '',
      date: '',
      location: '',
      theater: '',
      ageRating: '12+',
      imageSrc: '',
      imageAlt: '',
    },
  })

  const onSubmit = (data: EventFormSchema) => {
    console.log('Form data:', data)
    // Логика отправки
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-2xl font-semibold">Создать мероприятие</h2>
          <div className="space-y-2">
            <Label htmlFor="title">Название мероприятия</Label>
            <Input
              id="title"
              placeholder="Концерт группы"
              {...form.register('title')}
            />
            {form.formState.errors.title && (
              <p className="text-sm text-destructive">
                {form.formState.errors.title.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Цена билета (руб.)</Label>
              <Input
                id="price"
                type="number"
                placeholder="1000"
                {...form.register('price')}
              />
              {form.formState.errors.price && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.price.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="ageRating">Возрастной рейтинг</Label>
              <Select
                onValueChange={(value: EventFormSchema['ageRating']) =>
                  form.setValue('ageRating', value)
                }
                defaultValue={form.watch('ageRating')}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите рейтинг" />
                </SelectTrigger>
                <SelectContent>
                  {ageRatings.map((rating) => (
                    <SelectItem key={rating} value={rating}>
                      {rating}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Дата и время</Label>
            <Input id="date" type="datetime-local" {...form.register('date')} />
            {form.formState.errors.date && (
              <p className="text-sm text-destructive">
                {form.formState.errors.date.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Место проведения</Label>
            <Input
              id="location"
              placeholder="Адрес"
              {...form.register('location')}
            />
            {form.formState.errors.location && (
              <p className="text-sm text-destructive">
                {form.formState.errors.location.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="theater">Заведение</Label>
            <Input
              id="theater"
              placeholder="Театр"
              {...form.register('theater')}
            />
            {form.formState.errors.theater && (
              <p className="text-sm text-destructive">
                {form.formState.errors.theater.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Изображение</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  form.setValue('imageSrc', URL.createObjectURL(file))
                  form.setValue(
                    'imageAlt',
                    `Изображение: ${form.watch('title')}`
                  )
                }
              }}
            />
          </div>
          <Button type="submit" className="w-full">
            Создать мероприятие
          </Button>
        </form>
      </Form>
      <div className="sticky top-4">
        <h3 className="text-xl font-semibold mb-4">Предпросмотр</h3>
        <Card
          title={form.watch('title') || 'Название мероприятия'}
          price={form.watch('price') ? `${form.watch('price')}` : 'Цена'}
          date={form.watch('date') || new Date().toISOString()}
          location={form.watch('location') || 'Место проведения'}
          theater={form.watch('theater') || 'Заведение'}
          ageRating={form.watch('ageRating')}
          imageSrc={form.watch('imageSrc') || '/placeholder-event.jpg'}
          imageAlt={form.watch('imageAlt') || 'Превью мероприятия'}
        />
      </div>
    </div>
  )
}
