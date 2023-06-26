import { useCtxUser } from '@/contexts'
import { useRouter } from 'next/navigation'

export function useUser() {
  const route = useRouter()
  const { user } = useCtxUser()

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