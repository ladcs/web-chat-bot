import fastify from "fastify";
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import * as dotenv from 'dotenv';

dotenv.config()

const PORT_API = process.env
  .API_PORT ? parseInt(process.env.API_PORT, 10) : 3001;

const databaseURL = process.env.DATABASE_URL ?? 'deu não!';

const app = fastify();

app.register(cors, {
  origin:true,
});

app.listen({
  port: PORT_API,
  }).then(()=> {
    console.log(`HTTP server in port ${PORT_API}`)
  });