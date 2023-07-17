import { TUser } from "../schema/User";
import UserModel from "../model/user";
import { JWT } from "@fastify/jwt";
import BadRequest from "../error/BadRequest";
import { crypto, verify } from "../lib/bcrypt";
import NotFound from "../error/NotFound";

export default class UserService {

  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  login = async ({password, login}: Partial<TUser>): Promise<string> => {
    if (!login || !password) throw new BadRequest('all field must have value');
    const user = await this.model.readOne(login);
    if (!user) throw new NotFound('user or password not match')
    const logged = verify(password, user.password);
    if(!logged) throw new NotFound('user or password not match')
    
  }
}