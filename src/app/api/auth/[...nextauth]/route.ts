import { AuthService } from '@/core/services'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      pages: {
        signIn: '/[locate]/login',
      },
      async authorize(credentials, req) {
        try {
          const data = {
            username: credentials ? credentials.username : '',
            email: credentials ? credentials.email : '',
            password: credentials ? credentials.password : '',
          }
          const response = await AuthService.login(data)
          if (response) {
            return {
              username: data.username,
              email: data.email,
              password: data.password,
            }
          }
          return null
        } catch (error) {
          console.error('Login failed:', error)
        }
      },
    }),
  ],
  // Дополнительные опции по необходимости
}

const handler = NextAuth(authOptions)

export const GET = handler
export const POST = handler
