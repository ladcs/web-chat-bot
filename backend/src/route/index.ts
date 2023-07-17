import { Router } from 'express';
import UserService from '../controller/UserController';

const app = Router();

const controller = new UserService();

app.post('/login', controller.login);
app.post('/register', controller.createUser);
app.put('/user/:token', controller.updateUser)


export default app;