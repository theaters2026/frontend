'use server'

import { cookies } from 'next/headers'

type DataType = {
  access_token: string
  refresh_token: string
}

export const saveLoginTokens = async (data: DataType) => {
  const cookieStore = await cookies()
  cookieStore.set('access_token', data.access_token)
  cookieStore.set('refresh_token', data.refresh_token)
}
