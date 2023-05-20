'use client'

import { User } from "@/utils/types"
import React, { useState } from "react"
import { UserContext } from "./contexts"

export default function UserProvider({ children }: { children: React.ReactNode }){
  const [user, setUser] = useState<User | undefined>(undefined)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}