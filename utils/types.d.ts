export interface Chat {
  id: string
  name: string | null
  type: 0 | 1
  ownerId: string
  iconUrl: string | null
  description: string | null
  lastMessageId: string | null
  createdAt: Date
  updatedAt: Date 
}

export interface UserStatus {
  id: string
  userId: string
  type: 0 | 1 | 2 | 3 | 4
  emoji: string | null
  message: string | null
}

export interface User {
  id: string
  name: string
  email: string
  about: string | null
  friends: string[]
  color: string | null
  avatarUrl: string | null
  userName: string
  phoneNumber: string
  blockedUsers: string[]
  archivedChats: string[]
  createdAt: Date
  updatedAt: Date,
  status?: UserStatus
}