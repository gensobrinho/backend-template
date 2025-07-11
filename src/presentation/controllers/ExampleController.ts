import { Request, Response } from 'express';
import { ExampleService } from '../../application/example/ExampleService';
import { ExampleRepository } from '../../infrastructure/repositories/ExampleRepository';

export class ExampleController {
  private exampleUseCase: ExampleService;

  constructor() {
    // Instancia o caso de uso com o repositório concreto
    const exampleRepository = new ExampleRepository();
    this.exampleUseCase = new ExampleService(exampleRepository);
  }

  async getExample(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.exampleUseCase.execute();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}
