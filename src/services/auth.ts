import { api } from '@/lib/axios'
import type { User } from '@/types/user'
import { DEV_MODE } from '@/utils/constants'
import type { TelegramAuthData } from '@telegram-auth/react'

export async function login (data: TelegramAuthData) {
  const res = await api.post<{ message: string, user: User, accessToken: string }>('/auth/login', { devMode: DEV_MODE, ...data })
  return res.data
}

export async function logout () {
  const res = await api.post('/auth/logout')
  return res.data
}

export async function getSessionUser () {
  const res = await api.get<User>('/users/me')
  return res.data
}
