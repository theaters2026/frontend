import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/utils'
import { UI_CONSTANTS } from '@/shared/constants'

const buttonVariants = cva(
  `inline-flex items-center justify-center ${UI_CONSTANTS.BUTTON.GAP.DEFAULT} whitespace-nowrap 
  ${UI_CONSTANTS.BUTTON.BORDER_RADIUS.DEFAULT}
  transition-colors 
  [&_svg]:${UI_CONSTANTS.BUTTON.SVG.POINTER_EVENTS} [&_svg]:${UI_CONSTANTS.BUTTON.SVG.SIZE} [&_svg]:${UI_CONSTANTS.BUTTON.SVG.SHRINK}`,
  {
    variants: {
      variant: {
        default:
          'bg-secondary-800 hover:bg-secondary-700 active:bg-secondary-900 disabled:bg-primary-200 disabled:text-secondary-900 text-primary-100',
        outline:
          'border border-primary-300 bg-transparent text-primary-800 hover:bg-primary-100 hover:text-primary-900',
      },
      IsIconButton: {
        default: UI_CONSTANTS.BUTTON.PADDING.DEFAULT,
        true: '',
      },
      size: {
        default: UI_CONSTANTS.BUTTON.PADDING.DEFAULT,
        md: UI_CONSTANTS.BUTTON.PADDING.MEDIUM,
        lg: UI_CONSTANTS.BUTTON.PADDING.LARGE,
        icon: UI_CONSTANTS.BUTTON.ICON_SIZE.DEFAULT,
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {' '}
        {size == 'md' ? (
          <h4> {children} </h4>
        ) : size == 'lg' ? (
          <h3> {children} </h3>
        ) : (
          <h4> {children} </h4>
        )}{' '}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
