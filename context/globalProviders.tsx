import { ReactNode } from 'react'
import UserProvider from './userProvider'
import TooltipProvider from './tooltipProvider'

export default function GlobalProviders({children}: {children: ReactNode}){
  return (
    <>
      <TooltipProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </TooltipProvider>
    </>
  )
}