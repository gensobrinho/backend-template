import express, { Express } from 'express';
import dotenv from 'dotenv';
import { router } from '../../presentation/routes';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

export const app: Express = express();

// Middlewares globais
app.use(express.json()); // Permite trabalhar com JSON no corpo das requisições
app.use(express.urlencoded({ extended: true })); // Permite trabalhar com dados codificados como URL

// Rotas principais
app.use('/api', router);

// Middleware para tratar rotas inexistentes
app.use((req, res) => {
res.status(404).json({ error: 'Rota não encontrada' });
});

// Middleware para tratar erros genéricos
app.use((err: any, req: any, res: any, next: any) => {
console.error(err.stack);
res.status(500).json({ error: 'Erro interno do servidor' });
});