import { TUser } from "../schema/User";
import { IModelUser } from "../interface/User";
import { prisma } from "../lib/prisma";

export default class UserModel implements IModelUser<TUser> {
  readOne = async (login: string): Promise<TUser> => {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        login: login,
      },
    });

    return user;
  }

  update = async ({ login, password, name }: TUser): Promise<Partial<TUser>> => {
    const useUpdated = await prisma.user.update({
      where: {
        login: login,
      },
      data: {
        password,
        name,
      }
    });
    
    return useUpdated;
  }

  create = async ({ login, password, name }: TUser): Promise<Partial<TUser>> => {
    const createUser = await prisma.user.create({
      data: {
        login,
        password,
        name,
      }
    });
    
    return { login: createUser.login, name: createUser.name }
  }

}