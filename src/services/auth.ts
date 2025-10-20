import { api, authApi } from '@/lib/axios'
import type { User } from '@/types/user'
import type { TelegramAuthData } from '@telegram-auth/react'

export async function login (data: TelegramAuthData) {
  const res = await api.post<{ user: User, accessToken: string }>('/auth/telegram', data)
  return res.data
}

export async function getSessionUser () {
  const res = await authApi.get<User>('/users/me')
  return res.data
}
