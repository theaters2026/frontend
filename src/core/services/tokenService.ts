import { AUTH_CONSTANTS } from '@/shared/constants'

export class TokenService {
  static saveTokens(tokens: { access_token: string; refresh_token: string }) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        AUTH_CONSTANTS.STORAGE_KEYS.ACCESS_TOKEN,
        tokens.access_token
      )
      localStorage.setItem(
        AUTH_CONSTANTS.STORAGE_KEYS.REFRESH_TOKEN,
        tokens.refresh_token
      )
    }
  }

  static getTokens() {
    if (typeof window !== 'undefined') {
      return {
        access_token: localStorage.getItem(
          AUTH_CONSTANTS.STORAGE_KEYS.ACCESS_TOKEN
        ),
        refresh_token: localStorage.getItem(
          AUTH_CONSTANTS.STORAGE_KEYS.REFRESH_TOKEN
        ),
      }
    }
    return { access_token: null, refresh_token: null }
  }

  static getAccessToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(AUTH_CONSTANTS.STORAGE_KEYS.ACCESS_TOKEN)
    }
    return null
  }

  static getRefreshToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(AUTH_CONSTANTS.STORAGE_KEYS.REFRESH_TOKEN)
    }
    return null
  }

  static clearTokens() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(AUTH_CONSTANTS.STORAGE_KEYS.ACCESS_TOKEN)
      localStorage.removeItem(AUTH_CONSTANTS.STORAGE_KEYS.REFRESH_TOKEN)
    }
  }

  static isTokenExists(): boolean {
    const { access_token } = this.getTokens()
    return !!access_token
  }
}
