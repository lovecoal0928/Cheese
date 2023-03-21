import { storageRepository } from 'repositories/storage/StorageRepositoryImpl'
import { StorageService } from './StorageService'

class StorageServiceImpl implements StorageService {
  public upload = async (file: File) => {
    const key = await storageRepository.upload(file)
    const publicUrl = await storageRepository.getPath(key)
    return {
      publicUrl,
      key,
    }
  }
  public delete(key: string) {
    return storageRepository.delete(key)
  }
}

export const storageService = new StorageServiceImpl()
