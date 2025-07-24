import { Control, FieldPath, FieldValues } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/shared/ui'
import { validateTicketPrice, formatTicketPriceValue } from '@/shared/utils'
import { FORM_CONSTRAINTS } from '@/shared/constants'

interface NumberFieldProps<T extends FieldValues> {
  control: Control<T>
  name: FieldPath<T>
  label: string
  placeholder: string
}

export const NumberField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
}: NumberFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type="number"
              min={FORM_CONSTRAINTS.TICKET_PRICE_MIN}
              max={FORM_CONSTRAINTS.TICKET_PRICE_MAX}
              placeholder={placeholder}
              value={formatTicketPriceValue(field.value)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const validatedValue = validateTicketPrice(e.target.value)
                if (validatedValue !== undefined || e.target.value === '') {
                  field.onChange(validatedValue)
                }
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
