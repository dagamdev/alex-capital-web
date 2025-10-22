import { authApi } from "@/lib/axios"
import type { Draw } from "@/types/draw"

export async function getDraws () {
  const res = await authApi<Draw[]>('/draws')
  return res.data
}