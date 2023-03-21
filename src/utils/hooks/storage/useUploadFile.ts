import { useMutation } from '@tanstack/react-query'
import { storageService } from 'services/storage/StorageServiceImpl'

export const useUploadFile = () => {
  return {
    ...useMutation((file: File) => storageService.upload(file)),
  }
}
