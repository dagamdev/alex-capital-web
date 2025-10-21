import { authApi } from "@/lib/axios"
import type { User } from "@/types/user"

export async function updatePocketId (pocketOptionId: number | null) {
  const res = await authApi.patch<User>('/users/me', { pocketOptionId })

  return res.data
}