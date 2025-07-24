import * as React from 'react'
import { cn } from '@/shared/utils'
import { UI_CONSTANTS } from '@/shared/constants'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `${UI_CONSTANTS.COMMON.FLEX} ${UI_CONSTANTS.INPUT.HEIGHT} ${UI_CONSTANTS.COMMON.FULL_WIDTH} 
          ${UI_CONSTANTS.INPUT.BORDER_RADIUS} ${UI_CONSTANTS.INPUT.BORDER} ${UI_CONSTANTS.INPUT.BACKGROUND} 
          ${UI_CONSTANTS.INPUT.PADDING} ${UI_CONSTANTS.INPUT.TEXT_SIZE.BASE} ${UI_CONSTANTS.INPUT.SHADOW} 
          ${UI_CONSTANTS.INPUT.TRANSITION}
          ${UI_CONSTANTS.INPUT.FILE.BORDER} ${UI_CONSTANTS.INPUT.FILE.BACKGROUND} ${UI_CONSTANTS.INPUT.FILE.TEXT}
          ${UI_CONSTANTS.INPUT.PLACEHOLDER} ${UI_CONSTANTS.INPUT.FOCUS} ${UI_CONSTANTS.INPUT.DISABLED} 
          ${UI_CONSTANTS.INPUT.TEXT_SIZE.MEDIUM}`,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
