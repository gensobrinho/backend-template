import mongoose from 'mongoose';
import { AppConfig } from '../../../shared/config/AppConfig';

export const connectToMongo = async (): Promise<void> => {
  try {
    await mongoose.connect(AppConfig.databaseUrl);
    console.log('MongoDB conectado com sucesso');
  } catch (error) {
    console.error('Erro ao conectar no MongoDB:', error);
    process.exit(1);
  }
};