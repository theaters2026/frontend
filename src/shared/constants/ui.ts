export const IMAGE_CONSTRAINTS = {
  MAX_SIZE: 5 * 1024 * 1024,
  PREVIEW_WIDTH: 200,
  PREVIEW_HEIGHT: 150,
} as const

export const FORM_CONSTRAINTS = {
  TICKET_PRICE_MIN: 0,
  TICKET_PRICE_MAX: 50000,
} as const

export const AGE_RATINGS = [
  { value: '0+', label: '0+' },
  { value: '6+', label: '6+' },
  { value: '12+', label: '12+' },
  { value: '16+', label: '16+' },
  { value: '18+', label: '18+' },
] as const

export const DEFAULT_FORM_VALUES = {
  eventName: '',
  ticketPrice: undefined,
  ageRating: '',
  venue: '',
  theaterName: '',
  image: '',
  description: '',
  eventTime: '',
} as const

export const CURRENCY = {
  SYMBOL: 'р.',
  DEFAULT_PRICE: 0,
} as const

export const REMOVE_BUTTON_SYMBOL = '✕' as const

export const UI_CONSTANTS = {
  EVENT_CARD_IMAGE: {
    SMALL: { WIDTH: 560, HEIGHT: 314 },
    MEDIUM: { WIDTH: 800, HEIGHT: 450 },
    LARGE: { WIDTH: 1000, HEIGHT: 563 },
  },
  EVENT_HEADER_LOGO: {
    WIDTH: 128,
    HEIGHT: 40,
  },
  POPULAR_EVENTS_LIMIT: 3,
  SESSIONS_LIMIT: 4,

  BUTTON: {
    PADDING: {
      DEFAULT: 'px-5 py-2.5',
      MEDIUM: 'px-5 py-2.5',
      LARGE: 'px-6 py-3',
    },
    ICON_SIZE: {
      DEFAULT: 'h-9 w-9',
    },
    BORDER_RADIUS: {
      DEFAULT: 'rounded-lg',
    },
    GAP: {
      DEFAULT: 'gap-10',
    },
    SVG: {
      SIZE: 'size-4',
      POINTER_EVENTS: 'pointer-events-none',
      SHRINK: 'shrink-0',
    },
    DISABLED: {
      POINTER_EVENTS: 'pointer-events-none',
    },
  },

  INPUT: {
    HEIGHT: 'h-9',
    BORDER_RADIUS: 'rounded-md',
    BORDER: 'border border-input',
    BACKGROUND: 'bg-transparent',
    PADDING: 'px-3 py-1',
    TEXT_SIZE: {
      BASE: 'text-base',
      SMALL: 'text-sm',
      MEDIUM: 'md:text-sm',
    },
    SHADOW: 'shadow-sm',
    TRANSITION: 'transition-colors',
    FOCUS:
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
    DISABLED: 'disabled:cursor-not-allowed disabled:opacity-50',
    PLACEHOLDER: 'placeholder:text-muted-foreground',
    FILE: {
      BORDER: 'file:border-0',
      BACKGROUND: 'file:bg-transparent',
      TEXT: 'file:text-sm file:font-medium file:text-foreground',
    },
  },

  TEXTAREA: {
    MIN_HEIGHT: 'min-h-[60px]',
    BORDER_RADIUS: 'rounded-md',
    BORDER: 'border border-input',
    BACKGROUND: 'bg-transparent',
    PADDING: 'px-3 py-2',
    TEXT_SIZE: {
      BASE: 'text-base',
      SMALL: 'text-sm',
      MEDIUM: 'md:text-sm',
    },
    SHADOW: 'shadow-sm',
    FOCUS:
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
    DISABLED: 'disabled:cursor-not-allowed disabled:opacity-50',
    PLACEHOLDER: 'placeholder:text-muted-foreground',
  },

  SELECT: {
    TRIGGER: {
      HEIGHT: 'h-9',
      BORDER_RADIUS: 'rounded-md',
      BORDER: 'border border-input',
      BACKGROUND: 'bg-transparent',
      PADDING: 'px-3 py-2',
      TEXT_SIZE: 'text-sm',
      SHADOW: 'shadow-sm',
      FOCUS: 'focus:outline-none focus:ring-1 focus:ring-ring',
      DISABLED: 'disabled:cursor-not-allowed disabled:opacity-50',
      PLACEHOLDER: 'data-[placeholder]:text-muted-foreground',
    },
    CONTENT: {
      Z_INDEX: 'z-50',
      MIN_WIDTH: 'min-w-[8rem]',
      BORDER_RADIUS: 'rounded-md',
      BORDER: 'border',
      BACKGROUND: 'bg-popover',
      TEXT_COLOR: 'text-popover-foreground',
      SHADOW: 'shadow-md',
      PADDING: 'p-1',
    },
    ITEM: {
      PADDING: 'py-1.5 pl-2 pr-8',
      TEXT_SIZE: 'text-sm',
      BORDER_RADIUS: 'rounded-sm',
      FOCUS: 'focus:bg-accent focus:text-accent-foreground',
      DISABLED:
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    },
    ICON: {
      SIZE: 'h-4 w-4',
      OPACITY: 'opacity-50',
    },
    LABEL: {
      PADDING: 'px-2 py-1.5',
      TEXT_SIZE: 'text-sm',
      FONT_WEIGHT: 'font-semibold',
    },
    SEPARATOR: {
      MARGIN: '-mx-1 my-1',
      HEIGHT: 'h-px',
      BACKGROUND: 'bg-muted',
    },
  },

  LABEL: {
    TEXT_SIZE: 'text-sm',
    FONT_WEIGHT: 'font-medium',
    LINE_HEIGHT: 'leading-none',
    DISABLED: 'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  },

  COMMON: {
    FULL_WIDTH: 'w-full',
    FLEX: 'flex',
    ITEMS_CENTER: 'items-center',
    JUSTIFY_CENTER: 'justify-center',
    JUSTIFY_BETWEEN: 'justify-between',
    RING_OFFSET: 'ring-offset-background',
  },
} as const

export const FORM_VALIDATION = {
  MIN_PASSWORD_LENGTH: 6,
  MAX_FIELD_LENGTH: 100,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^\+?[\d\s-()]+$/,
} as const

export const ANIMATION_CONSTANTS = {
  SELECT: {
    IN: 'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
    OUT: 'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    SLIDE: {
      BOTTOM: 'data-[side=bottom]:slide-in-from-top-2',
      LEFT: 'data-[side=left]:slide-in-from-right-2',
      RIGHT: 'data-[side=right]:slide-in-from-left-2',
      TOP: 'data-[side=top]:slide-in-from-bottom-2',
    },
    TRANSLATE: {
      BOTTOM: 'data-[side=bottom]:translate-y-1',
      LEFT: 'data-[side=left]:-translate-x-1',
      RIGHT: 'data-[side=right]:translate-x-1',
      TOP: 'data-[side=top]:-translate-y-1',
    },
  },
} as const
