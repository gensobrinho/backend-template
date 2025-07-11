import { IExampleRepository } from "../../domain/interfaces/IExampleRepository";

export class ExampleRepository implements IExampleRepository {
async findAll(): Promise<{ id: number; name: string }[]> {
  // Simulação de dados vindos de um banco de dados
  return [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
}
}