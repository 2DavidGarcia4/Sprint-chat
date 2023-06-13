import { Tooltip, TooltipOption, useCtxTooltip } from "@/context/contexts"
import { MouseEvent } from 'react'

export function useTooltip() {
  const { setTooltip, tooltip } = useCtxTooltip()

  const createTooltip = ({currentTarget}: MouseEvent<HTMLElement>) => {
    if(tooltip?.options) return
    const { innerWidth } = window
    if(innerWidth <= 700) return
    const rect = currentTarget.getBoundingClientRect()

    setTooltip({
      rect,
      content: currentTarget.dataset.tooltip || 'undefined',
      direction: (currentTarget.dataset.direction || 'top') as Tooltip['direction'],
    })
  }

  const deleteTooltip = () => {
    if(tooltip?.options) return
    setTooltip(undefined)
  }

  const createTooltipOptions = ({currentTarget}: MouseEvent<HTMLElement>, options: TooltipOption[]) => {
    if(tooltip?.options) return setTooltip(undefined)
    const rect = currentTarget.getBoundingClientRect()

    options.forEach(o=> {
      const fn = o.function
      o.function = () => {
        fn()
        
      }
    })

    setTooltip({
      rect,
      content: 'undefined',
      direction: (currentTarget.dataset.direction || 'top') as Tooltip['direction'],
      options
    })
  } 

  return {
    createTooltip,
    createTooltipOptions,
    events: {
      onMouseEnter: createTooltip,
      onMouseLeave: deleteTooltip
    }
  }
}