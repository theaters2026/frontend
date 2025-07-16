import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export const useNavigation = () => {
  const router = useRouter()

  const navigateToEvent = useCallback(
    (eventId: number) => {
      router.push(`/event/${eventId}`)
    },
    [router]
  )

  const navigateBack = useCallback(() => {
    router.back()
  }, [router])

  return {
    navigateToEvent,
    navigateBack,
  }
}
