'use client'

import { useUserSession } from "@/stores/user-session"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function useAuthGuard(requiredRole?: 'ADMIN' | 'OWNER') {
  const { user } = useUserSession()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.replace('/')
    }

    if (requiredRole && user?.role !== requiredRole) {
      router.replace('/')
    }
  }, [user, requiredRole, router])
}