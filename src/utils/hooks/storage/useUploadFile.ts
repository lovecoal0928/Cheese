import { useMutation } from '@tanstack/react-query'
import { storageRepository } from 'repositories/storage/StorageRepositoryImpl'

export const useUploadFile = () => {
  return {
    ...useMutation((file: File) => storageRepository.upload(file)),
  }
}
