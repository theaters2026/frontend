import { login as apiLogin } from '@/core/api/login/apiLogin'
import { register as apiRegister } from '@/core/api/register/apiRegister'
import type { LoginFormSchema } from '@/app/[locale]/login/components/LoginForm/LoginForm.schema'
import type { RegisterFormSchema } from '@/app/[locale]/register/components/RegisterForm/RegisterForm.schema'
import { TokenService } from './tokenService'

export class AuthService {
  static isAuthenticated(): boolean {
    return TokenService.isTokenExists()
  }

  static async login(data: LoginFormSchema) {
    try {
      const response = await apiLogin(data)
      if (response?.data) {
        TokenService.saveTokens(response.data)
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
        TokenService.saveTokens(response.data)
        return response
      }
      return null
    } catch (error) {
      console.error('Registration failed:', error)
      throw error
    }
  }

  static logout() {
    TokenService.clearTokens()
    if (typeof window !== 'undefined') {
      window.location.href = '/login'
    }
  }
}
