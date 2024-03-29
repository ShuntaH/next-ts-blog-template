import { useCallback, useEffect, useState } from 'react'

export function useBlurBackground() {
  const [ blurOpacity, setBlurOpacity ] = useState(0)

  const handleBlurOpacity = useCallback(
    () => {
      const calculatedOpacity = window.pageYOffset / 300
      setBlurOpacity(calculatedOpacity)
    },
    [])

  useEffect(() => {
    window.addEventListener('scroll', handleBlurOpacity)
    return () => window.removeEventListener('scroll', handleBlurOpacity)
  }, [ handleBlurOpacity ])

  return blurOpacity
}
