export interface StorageRepository {
  upload: (file: File) => Promise<string | undefined>
  getPath: (key: string) => Promise<string | undefined>
  delete: (key: string) => Promise<void>
}
