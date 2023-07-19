import { Router } from 'express';
import UserController from '../controller/UserController';
import ChatController from '../controller/ChatController';

const app = Router();

const userController = new UserController();
const chatController = new ChatController();

app.post('/login', userController.login);
app.post('/register', userController.createUser);
app.post('/chat', chatController.create);
app.get('/chat', chatController.readAll);

export default app;