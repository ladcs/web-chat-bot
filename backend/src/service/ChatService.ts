import { TChat } from '../type/chat';
import ChatModel from '../model/chat';
import BadRequest from '../error/BadRequest';
import chatSchema from '../schema/NewChat';


export default class UserService {

  private model: ChatModel;

  constructor() {
    this.model = new ChatModel();
  }

  create = async ({user, date}: TChat) => {
    const userInfo = chatSchema.safeParse({user, date});
    if(!userInfo.success) throw new BadRequest(userInfo.error.message);
    const createdChat = await this.model.createOne({user, date});
    return createdChat;
  }

  read = async () => {
    const allChats = await this.model.readAll();
    return allChats;
  }
}