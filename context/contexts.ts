import { User } from "@/utils/types"
import { createContext, useContext, Dispatch, SetStateAction } from 'react';

//* User provider
interface UserContext {
  user: User | undefined, setUser: Dispatch<SetStateAction<User | undefined>>
}

export const UserContext = createContext<UserContext | undefined>(undefined)
export function useUserCtx() {
  return useContext(UserContext) as UserContext
}

//* Me provider
interface MeContext {
  userId?: string
  valid?: boolean
  setValid: Dispatch<SetStateAction<boolean | undefined>>
  showValidator: boolean
  setShowValidator: Dispatch<SetStateAction<boolean>>
}

export const MeContext = createContext<MeContext | undefined>(undefined)
export function useMeCtx() {
  return useContext(MeContext) as MeContext
}