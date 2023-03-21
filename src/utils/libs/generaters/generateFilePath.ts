import { generateId } from './generateId'

export const generateFilePath = (fileName: string): string => {
  return `${generateId()}-${fileName}`
}
