'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/shared/utils'
import { UI_CONSTANTS, ANIMATION_CONSTANTS } from '@/shared/constants'

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      `${UI_CONSTANTS.COMMON.FLEX} ${UI_CONSTANTS.SELECT.TRIGGER.HEIGHT} ${UI_CONSTANTS.COMMON.FULL_WIDTH} 
      ${UI_CONSTANTS.COMMON.ITEMS_CENTER} ${UI_CONSTANTS.COMMON.JUSTIFY_BETWEEN} whitespace-nowrap 
      ${UI_CONSTANTS.SELECT.TRIGGER.BORDER_RADIUS} ${UI_CONSTANTS.SELECT.TRIGGER.BORDER} 
      ${UI_CONSTANTS.SELECT.TRIGGER.BACKGROUND} ${UI_CONSTANTS.SELECT.TRIGGER.PADDING} 
      ${UI_CONSTANTS.SELECT.TRIGGER.TEXT_SIZE} ${UI_CONSTANTS.SELECT.TRIGGER.SHADOW} 
      ${UI_CONSTANTS.COMMON.RING_OFFSET} ${UI_CONSTANTS.SELECT.TRIGGER.PLACEHOLDER} 
      ${UI_CONSTANTS.SELECT.TRIGGER.FOCUS} ${UI_CONSTANTS.SELECT.TRIGGER.DISABLED} 
      [&>span]:line-clamp-1`,
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown
        className={`${UI_CONSTANTS.SELECT.ICON.SIZE} ${UI_CONSTANTS.SELECT.ICON.OPACITY}`}
      />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      `${UI_CONSTANTS.COMMON.FLEX} cursor-default ${UI_CONSTANTS.COMMON.ITEMS_CENTER} ${UI_CONSTANTS.COMMON.JUSTIFY_CENTER} py-1`,
      className
    )}
    {...props}
  >
    <ChevronUp className={UI_CONSTANTS.SELECT.ICON.SIZE} />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      `${UI_CONSTANTS.COMMON.FLEX} cursor-default ${UI_CONSTANTS.COMMON.ITEMS_CENTER} ${UI_CONSTANTS.COMMON.JUSTIFY_CENTER} py-1`,
      className
    )}
    {...props}
  >
    <ChevronDown className={UI_CONSTANTS.SELECT.ICON.SIZE} />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        `relative ${UI_CONSTANTS.SELECT.CONTENT.Z_INDEX} max-h-[--radix-select-content-available-height] 
        ${UI_CONSTANTS.SELECT.CONTENT.MIN_WIDTH} overflow-y-auto overflow-x-hidden 
        ${UI_CONSTANTS.SELECT.CONTENT.BORDER_RADIUS} ${UI_CONSTANTS.SELECT.CONTENT.BORDER} 
        ${UI_CONSTANTS.SELECT.CONTENT.BACKGROUND} ${UI_CONSTANTS.SELECT.CONTENT.TEXT_COLOR} 
        ${UI_CONSTANTS.SELECT.CONTENT.SHADOW}
        ${ANIMATION_CONSTANTS.SELECT.IN} ${ANIMATION_CONSTANTS.SELECT.OUT}
        ${ANIMATION_CONSTANTS.SELECT.SLIDE.BOTTOM} ${ANIMATION_CONSTANTS.SELECT.SLIDE.LEFT} 
        ${ANIMATION_CONSTANTS.SELECT.SLIDE.RIGHT} ${ANIMATION_CONSTANTS.SELECT.SLIDE.TOP}
        origin-[--radix-select-content-transform-origin]`,
        position === 'popper' &&
          `${ANIMATION_CONSTANTS.SELECT.TRANSLATE.BOTTOM} ${ANIMATION_CONSTANTS.SELECT.TRANSLATE.LEFT} 
          ${ANIMATION_CONSTANTS.SELECT.TRANSLATE.RIGHT} ${ANIMATION_CONSTANTS.SELECT.TRANSLATE.TOP}`,
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          UI_CONSTANTS.SELECT.CONTENT.PADDING,
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      `${UI_CONSTANTS.SELECT.LABEL.PADDING} ${UI_CONSTANTS.SELECT.LABEL.TEXT_SIZE} ${UI_CONSTANTS.SELECT.LABEL.FONT_WEIGHT}`,
      className
    )}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      `relative ${UI_CONSTANTS.COMMON.FLEX} ${UI_CONSTANTS.COMMON.FULL_WIDTH} cursor-default select-none 
      ${UI_CONSTANTS.COMMON.ITEMS_CENTER} ${UI_CONSTANTS.SELECT.ITEM.BORDER_RADIUS} 
      ${UI_CONSTANTS.SELECT.ITEM.PADDING} ${UI_CONSTANTS.SELECT.ITEM.TEXT_SIZE} outline-none 
      ${UI_CONSTANTS.SELECT.ITEM.FOCUS} ${UI_CONSTANTS.SELECT.ITEM.DISABLED}`,
      className
    )}
    {...props}
  >
    <span
      className={`absolute right-2 ${UI_CONSTANTS.COMMON.FLEX} h-3.5 w-3.5 ${UI_CONSTANTS.COMMON.ITEMS_CENTER} ${UI_CONSTANTS.COMMON.JUSTIFY_CENTER}`}
    >
      <SelectPrimitive.ItemIndicator>
        <Check className={UI_CONSTANTS.SELECT.ICON.SIZE} />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(
      `${UI_CONSTANTS.SELECT.SEPARATOR.MARGIN} ${UI_CONSTANTS.SELECT.SEPARATOR.HEIGHT} ${UI_CONSTANTS.SELECT.SEPARATOR.BACKGROUND}`,
      className
    )}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
