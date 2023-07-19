export interface IModelChat<T> {
  readMany(): Promise<T[] | []>,
  create(obj: T): Promise<T | null>,
}