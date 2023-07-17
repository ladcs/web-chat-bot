import { TUser } from "../schema/User";
import { IModelUser } from "../interface/User";
import { prisma } from "../lib/prisma";

export default class UserModel implements IModelUser<TUser> {
  readOne = async (login: String): Promise<TUser| null> => {
    const user = await prisma.user.findFirst({
      where: {
        login: login,
      },
      data: {
        
      }
    });
    return user
  }
  update = async (obj: TUser): Promise<TUser | null> => {
    const useUpdated = await prisma.user.update({
      where: {
        login: obj.login,
      },
    });
    throw new Error("Method not implemented.");
  }
  create(obj: TUser): Promise<TUser | null> {
    throw new Error("Method not implemented.");
  }

}