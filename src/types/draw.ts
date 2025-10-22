type Groups = 'VIP_GROUP' | 'PUBLIC_GROUP'

export interface Draw {
  id: string
  title: string
  description: string | null
  endAt: string | null
  maxParticipants: number | null
  requiresGroup: Groups | null
  requiresPocket: boolean
  currentParticipants: number
  numberOfWinners: number
  createdAt: string
  updatedAt: string
}