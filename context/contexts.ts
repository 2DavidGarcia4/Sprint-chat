import { User } from "@/utils/types"
import { createContext, useContext, Dispatch, SetStateAction } from 'react';

interface UserContext {
  user: User | undefined, setUser: Dispatch<SetStateAction<User | undefined>>
}

export const UserContext = createContext<UserContext | undefined>(undefined)

export const useUserProv = () => useContext(UserContext) as UserContext