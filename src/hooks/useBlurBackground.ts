import { useCallback, useEffect, useState } from "react";


export function useBlurBackground() {
  const [ blurOpacity, setBlurOpacity ] = useState(0)

  const handleBlurOpacity = useCallback(() => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    const calculatedOpacity = window.pageYOffset / 300
    setBlurOpacity(calculatedOpacity)
  }, [ blurOpacity ])


  useEffect(() => {
    window.addEventListener("scroll", handleBlurOpacity);
    return () => window.removeEventListener("scroll", handleBlurOpacity);
  }, []);

  return blurOpacity
}

