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


//* Tooltip
export interface Tooltip {
  x: number
  y: number
  rect: DOMRect
  content: string
  direction: 'top' | 'left' | 'bottom' | 'right'
}

export interface TooltipContextTs {
  tooltip: Tooltip | undefined
  setTooltip: Dispatch<SetStateAction<Tooltip | undefined>>
}

export const TooltipContext = createContext<TooltipContextTs | undefined>(undefined)
export function useCtxTooltip() {
  return useContext(TooltipContext) as TooltipContextTs
}


//* Toast notifications
interface Notification {
  type: 'success' | 'error' | 'info' | 'warning'
  text: string
  time?: number
}