import { createContext, useContext, Dispatch, SetStateAction, HTMLInputTypeAttribute } from 'react'

interface Searchable {
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

interface PanelForm {
  head: JSX.Element
  inputs: Input[]
  buttonText: string
  handleSubmit: (param: any) => any
}

interface DynamicPanel {
  title?: string
  searchable?: Searchable
  panelForm?: PanelForm
}

interface DynamicPanelContextTs {
  panel: DynamicPanel | undefined
  setPanel: Dispatch<SetStateAction<DynamicPanel | undefined>>
}

export const DynamicPanelContext = createContext<DynamicPanelContextTs | undefined>(undefined)
export function useCtxDynamicPanel() {
  return useContext(DynamicPanelContext) as DynamicPanelContextTs
}