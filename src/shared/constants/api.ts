export const API_CONSTANTS = {
  HTTP_STATUS: {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  },
  LIMITS: {
    MAX_EVENTS: 50,
  },
} as const
