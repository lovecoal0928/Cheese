import { ChangeEvent, useCallback, useState } from 'react'
import { handleReadFile } from 'utils/libs/handleReadFile'

type Images = {
  file: File[]
  src: string[]
}
export const useImageFiles = () => {
  const [images, setImages] = useState<Images>({ file: [], src: [] })

  const handleSetFiles = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setImages((prevState) => ({
        ...prevState,
        file: [...prevState.file, ...files],
      }))
    }
  }, [])

  const handleSetSrc = useCallback((srcs: string[]) => {
    setImages((prevState) => ({
      ...prevState,
      src: [...srcs],
    }))
  }, [])

  const handleLoopSrc = useCallback(async () => {
    const srcs = []
    for (const value of images.file) {
      srcs.push(await handleReadFile(value))
    }
    handleSetSrc(srcs)
  }, [])

  return { images, setImages, handleSetFiles, handleSetSrc, handleLoopSrc }
}
