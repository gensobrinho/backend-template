import { Router } from 'express';
import { exampleRouter } from './ExampleRoutes';

export const router = Router();

router.use('/example', exampleRouter);

router.get('/', (req, res) => {
res.send('API funcionando!');
});