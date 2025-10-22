// store/user-session.ts
import { create } from 'zustand'
import type { User } from '@/types/user'
import { logout } from '@/services/auth'

interface UserSessionState {
  user?: User
  setUser: (user: User) => void
  logout: () => void
}

export const useUserSession = create<UserSessionState>((set) => ({
  setUser: (user) => set({ user }),
  logout: () => {
    logout().then(() => {
      set({ user: undefined })
    })
  },
}))
