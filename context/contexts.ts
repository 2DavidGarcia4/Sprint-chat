import { User } from "@/utils/types"
import { createContext, useContext, Dispatch, SetStateAction, HTMLInputTypeAttribute } from 'react';

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
export interface TooltipOption {
  icon: string | JSX.Element,
  name: string,
  function: ()=> any
}

export interface Tooltip {
  rect: DOMRect
  content: string
  direction: 'top' | 'left' | 'bottom' | 'right',
  options?: TooltipOption[]
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


//* Dynamic panel
export interface Searchable {
  list: any[]
  target: string
  optionalContent: JSX.Element
  itemComponent: ({item}: {item: any}) => JSX.Element
}

interface Input {
  key: string
  type: HTMLInputTypeAttribute
  label: string
  regex?: RegExp
  required?: boolean
  maxLength?: number
  placeholder?: string
  defaultValue?: string
}

export interface PanelForm {
  head: JSX.Element
  inputs: Input[]
  buttonText: string
  handleSubmit: (param: any) => any
}

export interface DynamicPanel {
  title?: string
  searchable?: Searchable
  panelForm?: PanelForm
}

export interface DynamicPanelContextTs {
  panel: DynamicPanel | undefined
  setPanel: Dispatch<SetStateAction<DynamicPanel | undefined>>
}

export const DynamicPanelContext = createContext<DynamicPanelContextTs | undefined>(undefined)
export function useCtxDynamicPanel() {
  return useContext(DynamicPanelContext) as DynamicPanelContextTs
}