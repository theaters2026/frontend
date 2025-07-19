import { AUTH_CONSTANTS } from '@/shared/constants'
import { login as apiLogin } from '@/core/api/login/apiLogin'
import { register as apiRegister } from '@/core/api/register/apiRegister'
import type { LoginFormSchema } from '@/app/[locale]/login/components/LoginForm/LoginForm.schema'

import type { RegisterFormSchema } from '@/app/[locale]/register/components/RegisterForm/RegisterForm.schema'

export class AuthService {
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

  static clearTokens() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(AUTH_CONSTANTS.STORAGE_KEYS.ACCESS_TOKEN)
      localStorage.removeItem(AUTH_CONSTANTS.STORAGE_KEYS.REFRESH_TOKEN)
    }
  }

  static isAuthenticated(): boolean {
    const { access_token } = this.getTokens()
    return !!access_token
  }

  static async login(data: LoginFormSchema) {
    try {
      const response = await apiLogin(data)
      if (response?.data) {
        this.saveTokens(response.data)
        return response
      }
      return null
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  static async register(data: RegisterFormSchema) {
    try {
      const response = await apiRegister(data)
      if (response?.data) {
        this.saveTokens(response.data)
        return response
      }
      return null
    } catch (error) {
      console.error('Registration failed:', error)
      throw error
    }
  }

  static logout() {
    this.clearTokens()
    if (typeof window !== 'undefined') {
      window.location.href = '/login'
    }
  }
}
