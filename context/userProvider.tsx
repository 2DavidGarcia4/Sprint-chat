'use client'

import { User } from "@/utils/types"
import { useState, useEffect, ReactNode } from "react"
import { UserContext } from "./contexts"
import { customFetch } from "@/utils/functions"

export default function UserProvider({ children }: { children: ReactNode }){
  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(()=> {
    customFetch(`users/@me`).then(res=> {
      if(res.id) setUser(res)
    })
    .catch(()=> '')
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}