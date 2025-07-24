import * as React from 'react'
import { cn } from '@/shared/utils'
import { UI_CONSTANTS } from '@/shared/constants'

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        `${UI_CONSTANTS.COMMON.FLEX} ${UI_CONSTANTS.TEXTAREA.MIN_HEIGHT} ${UI_CONSTANTS.COMMON.FULL_WIDTH} 
        ${UI_CONSTANTS.TEXTAREA.BORDER_RADIUS} ${UI_CONSTANTS.TEXTAREA.BORDER} ${UI_CONSTANTS.TEXTAREA.BACKGROUND} 
        ${UI_CONSTANTS.TEXTAREA.PADDING} ${UI_CONSTANTS.TEXTAREA.TEXT_SIZE.BASE} ${UI_CONSTANTS.TEXTAREA.SHADOW} 
        ${UI_CONSTANTS.TEXTAREA.PLACEHOLDER} ${UI_CONSTANTS.TEXTAREA.FOCUS} ${UI_CONSTANTS.TEXTAREA.DISABLED} 
        ${UI_CONSTANTS.TEXTAREA.TEXT_SIZE.MEDIUM}`,
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
