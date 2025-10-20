export interface User {
    id: string
    telegramId: number
    firstName: string
    lastName: string | null
    username: string | null
    photoUrl: string | null
    pocketOptionId: number | null
    role: 'OWNER' | 'ADMIN' | 'USER'
    createdAt: string
    updatedAt: string
}