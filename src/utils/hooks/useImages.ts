import { ChangeEvent, useCallback, useState } from 'react'

export const useImage = () => {
  const [image, setImage] = useState("")

  const handleSetImage = useCallback((src:string) => {
    setImage(src)
  }, [])

  return { image,handleSetImage}
}
