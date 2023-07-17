export interface IModelUser<T> {
  readOne(login: string): Promise<T | null>,
  update(obj: T): Promise<Partial<T>>,
  create(obj: T): Promise<Partial<T>>,
}