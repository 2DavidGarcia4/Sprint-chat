import { useUserProv } from '@/context/contexts'
import { endPoint } from '@/utils/data'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useUser() {
  const route = useRouter()
  const { user } = useUserProv()

  const isLoged = Boolean(user)

  const protectedRoute = () => {
    if(!user) {
      route.push('/login')
    }
  }

  return {
    isLoged,
    protectedRoute
  }
}