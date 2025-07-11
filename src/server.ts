import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
// import { sql } from './db/connection.ts';
import { env } from './env.ts';
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

app.listen({ port: env.PORT });
