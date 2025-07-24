'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { Button } from '@/shared/ui'
import { Form } from '@/shared/ui'
import {
  CreateEventFormValues,
  createEventSchemaFactory,
} from '@/shared/schemas/createEventSchema'
import { useCreateEvent } from '@/shared/hooks/useCreateEvent'
import { useImageUpload } from '@/shared/hooks/useImageUpload'
import { useNotifications } from '@/shared/hooks/useNotifications'
import { EventPreviewCard } from '../EventPreviewCard/EventPreviewCard'
import { TextField } from '@/core/ui/FormFields/TextField'
import { NumberField } from '@/core/ui/FormFields/NumberField'
import { DateField } from '@/core/ui/FormFields/DateField'
import { SelectField } from '@/core/ui/FormFields/SelectField'
import { TextareaField } from '@/core/ui/FormFields/TextareaField'
import { ImageUploadField } from '@/core/ui/FormFields/ImageUploadField'
import { NotificationMessages } from '@/core/ui/Notifications/NotificationMessages'
import { createEventFormData } from '@/shared/utils'
import { AGE_RATINGS, DEFAULT_FORM_VALUES } from '@/shared/constants'
import styles from './EventCreationForm.module.scss'

export const EventCreationForm = () => {
  const t = useTranslations('CreateEvent')
  const { createEvent, isLoading, error } = useCreateEvent()
  const localizedSchema = createEventSchemaFactory(t)

  const {
    submitError,
    successMessage,
    clearNotifications,
    showError,
    showSuccess,
  } = useNotifications()

  const {
    selectedImage,
    imagePreview,
    handleImageChange: handleImageUpload,
    clearImage,
  } = useImageUpload({
    onError: (message) => showError(t(message)),
  })

  const form = useForm<CreateEventFormValues>({
    resolver: zodResolver(localizedSchema),
    defaultValues: DEFAULT_FORM_VALUES,
  })

  const watchedFields = form.watch()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleImageUpload(e)
    const file = e.target.files?.[0]
    if (file) {
      form.setValue('image', file.name)
      clearNotifications()
    }
  }

  const handleRemoveImage = () => {
    clearImage()
    form.setValue('image', '')
  }

  const onSubmit = async (values: CreateEventFormValues) => {
    try {
      clearNotifications()
      const formData = createEventFormData(values, selectedImage)
      await createEvent(formData)
      showSuccess(t('messages.success'))
      form.reset()
      clearImage()
    } catch (error) {
      console.error('Error creating event:', error)
      showError(error instanceof Error ? error.message : t('messages.error'))
    }
  }

  return (
    <div className={styles['event-creation-form']}>
      <h1 className={styles['event-creation-form__title']}>{t('title')}</h1>

      <NotificationMessages
        successMessage={successMessage}
        errorMessage={submitError || error}
        successClassName={styles['event-creation-form__success-message']}
        errorClassName={styles['event-creation-form__error-message']}
      />

      <div className={styles['event-creation-form__content-wrapper']}>
        <div className={styles['event-creation-form__preview-section']}>
          <h2 className={styles['event-creation-form__preview-title']}>
            {t('preview.title')}
          </h2>
          <EventPreviewCard
            formData={watchedFields}
            imagePreview={imagePreview}
          />
        </div>

        <div className={styles['event-creation-form__form-section']}>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={styles['event-creation-form__form']}
            >
              <TextField
                control={form.control}
                name="eventName"
                label={t('fields.eventName')}
                placeholder={t('placeholders.eventName')}
              />

              <div className={styles['event-creation-form__price-age-grid']}>
                <NumberField
                  control={form.control}
                  name="ticketPrice"
                  label={t('fields.ticketPrice')}
                  placeholder={t('placeholders.ticketPrice')}
                />

                <SelectField
                  control={form.control}
                  name="ageRating"
                  label={t('fields.ageRating')}
                  placeholder={t('placeholders.ageRating')}
                  options={AGE_RATINGS}
                />
              </div>

              <div className={styles['event-creation-form__date-time-grid']}>
                <DateField
                  control={form.control}
                  name="eventDate"
                  label={t('fields.eventDate')}
                  placeholder={t('placeholders.eventDate')}
                />

                <TextField
                  control={form.control}
                  name="eventTime"
                  type="time"
                  label={t('fields.eventTime')}
                  placeholder={t('placeholders.eventTime')}
                />
              </div>

              <TextField
                control={form.control}
                name="venue"
                label={t('fields.venue')}
                placeholder={t('placeholders.venue')}
              />

              <TextField
                control={form.control}
                name="theaterName"
                label={t('fields.theaterName')}
                placeholder={t('placeholders.theaterName')}
              />

              <ImageUploadField
                control={form.control}
                name="image"
                label={t('fields.image')}
                imagePreview={imagePreview}
                onImageChange={handleImageChange}
                onRemoveImage={handleRemoveImage}
                uploadClassName={styles['event-creation-form__image-upload']}
                fileInputClassName={styles['event-creation-form__file-input']}
                previewClassName={styles['event-creation-form__image-preview']}
                imageClassName={styles['event-creation-form__preview-image']}
                removeButtonClassName={
                  styles['event-creation-form__remove-image']
                }
              />

              <TextareaField
                control={form.control}
                name="description"
                label={t('fields.description')}
                placeholder={t('placeholders.description')}
                className={styles['event-creation-form__textarea']}
              />

              <Button
                type="submit"
                className={styles['event-creation-form__submit-button']}
                disabled={isLoading}
              >
                {isLoading ? t('buttons.creating') : t('buttons.create')}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
