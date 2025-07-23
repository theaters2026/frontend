import { useEffect, useState } from 'react'

interface UseScriptLoaderOptions {
  src: string
  async?: boolean
  onError?: (error: string | Event) => void
  checkGlobal?: () => boolean
}

interface UseScriptLoaderReturn {
  isLoaded: boolean
  error: string | Event | null
}

export const useScriptLoader = ({
  src,
  async = true,
  onError,
  checkGlobal,
}: UseScriptLoaderOptions): UseScriptLoaderReturn => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | Event | null>(null)

  useEffect(() => {
    if (checkGlobal && checkGlobal()) {
      setIsLoaded(true)
      return
    }

    const existingScript = document.querySelector(`script[src="${src}"]`)
    if (existingScript) {
      if (checkGlobal) {
        const checkInterval = setInterval(() => {
          if (checkGlobal()) {
            setIsLoaded(true)
            clearInterval(checkInterval)
          }
        }, 100)

        setTimeout(() => clearInterval(checkInterval), 10000)
        return () => clearInterval(checkInterval)
      } else {
        setIsLoaded(true)
      }
      return
    }

    const script = document.createElement('script')
    script.src = src
    script.async = async

    script.onload = () => {
      if (checkGlobal) {
        const checkInterval = setInterval(() => {
          if (checkGlobal()) {
            setIsLoaded(true)
            clearInterval(checkInterval)
          }
        }, 100)

        setTimeout(() => clearInterval(checkInterval), 10000)
      } else {
        setIsLoaded(true)
      }
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
  }, [src, async, onError, checkGlobal])

  return {
    isLoaded,
    error,
  }
}
