import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { env } from './env.ts';
import { createQuestionRoute } from './http/routes/createQuestion.ts';
import { createRoomsRoute } from './http/routes/createRooms.ts';
import { getRoomsQuestion } from './http/routes/getRoomQuestions.ts';
import { getRoomsRoutes } from './http/routes/getRooms.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: '*', // Endereço de acesso permitido
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => {
  return 'OK!';
});

app.register(getRoomsRoutes);
app.register(createRoomsRoute);
app.register(getRoomsQuestion);
app.register(createQuestionRoute);

app.listen({ port: env.PORT });
