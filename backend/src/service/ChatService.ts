import { TChat } from '../type/chat';
import ChatModel from '../model/chat';


export default class UserService {

  private model: ChatModel;

  constructor() {
    this.model = new ChatModel();
  }

  create = async ({user, date}: Partial<TChat>) => {
    const createdChat = await this.model.createOne({user, date});
    return createdChat;
  }

  read = async () => {
    const allChats = await this.model.readAll();
    return allChats;
  }
}