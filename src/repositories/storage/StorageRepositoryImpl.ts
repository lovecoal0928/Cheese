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

  public getPath = async (key: string) => {
    const { data } = supabase.storage.from(this.bucketName).getPublicUrl(key)
    return data.publicUrl
  }

  public delete = async (key: string) => {
    const { error } = await supabase.storage.from(this.bucketName).remove([key])
    if (error) throw error
  }
}

export const storageRepository = new StorageRepositoryImpl()
