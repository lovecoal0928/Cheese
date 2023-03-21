export interface StorageRepository {
  upload: (file: File) => Promise<string | undefined>
  //   delete: (data: any) => Promise<void>
}
