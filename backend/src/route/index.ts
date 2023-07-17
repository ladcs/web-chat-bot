import { Router } from 'express';
import UserService from '../controller/UserController';

const app = Router();

const controller = new UserService();

app.post('/login', controller.login);
app.post('/register', controller.createUser);

export default app;