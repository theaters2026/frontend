import { Control, FieldPath, FieldValues } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/shared/ui'
import { REMOVE_BUTTON_SYMBOL } from '@/shared/constants'

interface ImageUploadFieldProps<T extends FieldValues> {
  control: Control<T>
  name: FieldPath<T>
  label: string
  imagePreview: string | null
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onRemoveImage: () => void
  fileInputClassName?: string
  uploadClassName?: string
  previewClassName?: string
  imageClassName?: string
  removeButtonClassName?: string
}

export const ImageUploadField = <T extends FieldValues>({
  control,
  name,
  label,
  imagePreview,
  onImageChange,
  onRemoveImage,
  fileInputClassName,
  uploadClassName,
  previewClassName,
  imageClassName,
  removeButtonClassName,
}: ImageUploadFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className={uploadClassName}>
              <Input
                type="file"
                accept="image/*"
                onChange={onImageChange}
                className={fileInputClassName}
              />
              {imagePreview && (
                <div className={previewClassName}>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className={imageClassName}
                  />
                  <button
                    type="button"
                    onClick={onRemoveImage}
                    className={removeButtonClassName}
                  >
                    {REMOVE_BUTTON_SYMBOL}
                  </button>
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
