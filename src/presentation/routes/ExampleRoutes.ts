import { Router } from 'express';
import { ExampleController } from '../controllers/ExampleController';

const exampleController = new ExampleController();
export const exampleRouter = Router();

exampleRouter.get('/', exampleController.getExample.bind(exampleController));
