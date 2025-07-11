import { IExampleRepository } from '../../domain/interfaces/IExampleRepository';

export class ExampleService {
private exampleRepository: IExampleRepository;

constructor(exampleRepository: IExampleRepository) {
  this.exampleRepository = exampleRepository;
}

async execute(): Promise<{ id: number; name: string }[]> {
  // Busca os dados do repositório
  const data = await this.exampleRepository.findAll();

  // Lógica de negócios (exemplo: filtrar ou transformar os dados)
  const processedData = data.map((item) => ({
    ...item,
    name: item.name.toUpperCase(), // Transformação fictícia
  }));

  return processedData;
}
}