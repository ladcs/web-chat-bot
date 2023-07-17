export interface IModelUser<T> {
  readOne(login: string): Promise<T | null>,
  update(obj: T): Promise<T | null>,
  create(obj: T): Promise<T|null>,
}