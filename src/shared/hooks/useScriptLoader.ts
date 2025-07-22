import { useEffect, useState } from 'react'

interface UseScriptLoaderOptions {
  src: string
  async?: boolean
  onError?: (error: string | Event) => void
}

interface UseScriptLoaderReturn {
  isLoaded: boolean
  error: string | Event | null
}

export const useScriptLoader = ({
  src,
  async = true,
  onError,
}: UseScriptLoaderOptions): UseScriptLoaderReturn => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | Event | null>(null)

  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${src}"]`)
    if (existingScript) {
      setIsLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src = src
    script.async = async

    script.onload = () => {
      setIsLoaded(true)
    }

    script.onerror = (errorEvent) => {
      setError(errorEvent)
      onError?.(errorEvent)
    }

    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [src, async, onError])

  return {
    isLoaded,
    error,
  }
}
