export const UI_CONSTANTS = {
  EVENT_CARD_IMAGE: { WIDTH: 560, HEIGHT: 314 },
  CURRENCY_SYMBOL: 'р.',
  POPULAR_EVENTS_LIMIT: 3,
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
  FORM_VALIDATION: {
    MIN_PASSWORD_LENGTH: 6,
    MAX_FIELD_LENGTH: 100,
  },
} as const
