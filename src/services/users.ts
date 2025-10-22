import { api } from "@/lib/axios"
import type { User } from "@/types/user"

export async function updatePocketId (pocketOptionId: number | null) {
  const res = await api.patch<User>('/users/me', { pocketOptionId })

  return res.data
}