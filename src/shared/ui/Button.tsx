import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/utils'

const buttonVariants = cva(
  `inline-flex items-center justify-center gap-10 whitespace-nowrap 
  rounded-lg
  transition-colors 
  disabled:pointer-events-none
  [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
  {
    variants: {
      variant: {
        default:
          'bg-secondary-800 hover:bg-secondary-700 active:bg-secondary-900 disabled:bg-primary-200 disabled:text-secondary-900 text-primary-100',
      },
      IsIconButton: {
        default: 'px-5 py-2.5',
        true: '',
      },
      size: {
        default: 'px-5 py-2.5',
        md: 'px-5 py-2.5',
        lg: 'px-6 py-3',
        icon: 'h-9 w-9',
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
