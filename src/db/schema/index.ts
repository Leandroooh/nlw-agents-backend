// barrel file ( Arquivo que re-exporta todos os arquivos

import { questions } from './questions.ts';
import { rooms } from './rooms.ts';

export const schema = {
  rooms,
  questions,
};
