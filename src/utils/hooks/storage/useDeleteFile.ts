import { useMutation } from '@tanstack/react-query'
import { storageService } from 'services/storage/StorageServiceImpl'

export const useDeleteFile = () => {
  return {
    ...useMutation((key: string) => storageService.delete(key)),
  }
}
