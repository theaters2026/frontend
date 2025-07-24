import { Control, FieldPath, FieldValues } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/shared/ui'
import {
  formatDateForInput,
  parseDateFromInput,
  getCurrentDateString,
} from '@/shared/utils'

interface DateFieldProps<T extends FieldValues> {
  control: Control<T>
  name: FieldPath<T>
  label: string
  placeholder: string
}

export const DateField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
}: DateFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type="date"
              placeholder={placeholder}
              {...field}
              value={formatDateForInput(field.value)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                field.onChange(parseDateFromInput(e.target.value))
              }}
              min={getCurrentDateString()}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
