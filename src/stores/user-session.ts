// store/user-session.ts
import { create } from 'zustand'
import type { User } from '@/types/user'

interface UserSessionState {
  user?: User
  setUser: (user: User) => void
  logout: () => void
}

export const useUserSession = create<UserSessionState>((set) => ({
  setUser: (user) => set({ user }),
  logout: () => set({ user: undefined }),
}))
