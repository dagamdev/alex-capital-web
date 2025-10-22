import { api } from "@/lib/axios"
import type { Draw } from "@/types/draw"

export async function getDraws () {
  const res = await api<Draw[]>('/draws')
  return res.data
}