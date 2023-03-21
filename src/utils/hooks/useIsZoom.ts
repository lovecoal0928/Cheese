import { useCallback, useState } from 'react'

export const useIsZoom = () => {
  const [isZoom, setIsZoom] = useState(false)

  const handleSetIsZoom = useCallback(() => {
    setIsZoom((prevState)=>!prevState)
  }, [])

  return { isZoom,handleSetIsZoom}
}
