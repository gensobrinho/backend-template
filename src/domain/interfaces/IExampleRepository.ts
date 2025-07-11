export interface IExampleRepository {
  findAll(): Promise<{ id: number; name: string }[]>;
}
