export const AUTH_CONSTANTS = {
  STORAGE_KEYS: {
    ACCESS_TOKEN: 'access_token',
    REFRESH_TOKEN: 'refresh_token',
  },
  ENDPOINTS: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
  },
  VALIDATION: {
    MIN_PASSWORD_LENGTH: 6,
    MAX_FIELD_LENGTH: 100,
    MIN_FIELD_LENGTH: 1,
  },
} as const
