export interface StorageService {
  upload: (
    file: File,
  ) => Promise<{ key: string; publicUrl: string } | undefined>
  delete: (key: string) => Promise<void>
}
