import { TChat } from "../type/chat";
import { prisma } from "../lib/prisma";

export default class UserModel {
  readAll = async () => {
    const chats = await prisma.chat.findMany();
    return chats;
  }

  createOne = async (chat: Partial<TChat>) => {
    if (chat.user !== undefined && chat.date !== undefined) {
      const createdChat = await prisma.chat.create({
        data: {
          user: chat.user,
          date: chat.date,
        }
      });
  
      return createdChat;
    }
  }
}