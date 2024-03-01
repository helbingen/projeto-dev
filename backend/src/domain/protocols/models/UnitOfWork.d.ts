export default interface IUnitOfWork extends IUnitOfWorkTransation<any> {
  tokenAuthorization: string;
}

export interface IUnitOfWorkTransation<T = any> {
  init(): Promise<void>;
  commit(): Promise<void>;
  rollBack(): Promise<void>;
  getTransition(): T | undefined;
}
