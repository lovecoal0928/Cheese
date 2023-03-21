import { supabase } from 'plugins/supabse'
import { StorageRepository } from './StorageRepository'
import { generateFilePath } from 'utils/libs/generaters/generateFilePath'

class StorageRepositoryImpl implements StorageRepository {
  private readonly bucketName: string = 'snap-posts'
  public upload = async (file: File) => {
    const filePath = generateFilePath(file.name)
    const { data, error } = await supabase.storage
      .from(this.bucketName)
      .upload(filePath, file, {
        upsert: false,
      })
    if (error) throw error
    return data.path
  }
}

export const storageRepository = new StorageRepositoryImpl()
