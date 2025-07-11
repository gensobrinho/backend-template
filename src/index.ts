import dotenv from 'dotenv';
import { app } from './infrastructure/http/Server';
import { AppConfig } from './shared/config/AppConfig';
import { connectToMongo } from './infrastructure/database/mongodb/connection';

dotenv.config();
const startServer = async () => {
  try {
    await connectToMongo();

    const port = AppConfig.port;
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Falha ao iniciar o servidor:', err);
    process.exit(1);
  }
};

startServer();