export interface IModelUser<T> {
  readOne(login: string): Promise<T | null>,
  create(obj: T): Promise<Partial<T>>,
}