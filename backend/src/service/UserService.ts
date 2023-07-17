import { TUser } from "../schema/User";
import UserModel from "../model/user";
import BadRequest from "../error/BadRequest";
import { crypto, verify } from "../lib/bcrypt";
import NotFound from "../error/NotFound";
import { jwtHash, jwtVerify } from "../lib/jwt";
import userSchema from "../schema/NewUser";

export default class UserService {

  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  login = async ({password, login}: Partial<TUser>): Promise<string> => {
    if (!login || !password) throw new BadRequest('all field must have value');
    const user = await this.model.readOne(login);
    if (!user) throw new NotFound('user or password not match');
    const logged = verify(password, user.password);
    if(!logged) throw new NotFound('user or password not match');
    const token = jwtHash({ login: user.login, name: user.name });
    return token;
  }

  newUser = async (user: TUser): Promise<string> => {
    const userInfo = userSchema.safeParse(user);
    if(!userInfo.success) throw new BadRequest(userInfo.error.message);
    const passwordCrypt = await crypto(user.password);
    const userToToken = await this.model.create({...user, password: passwordCrypt});
    const token = jwtHash(userToToken);
    return token;
  }

  update = async (user: TUser, token: string): Promise<string> => {
    const { name, login } = jwtVerify(token);
    if (name !== user.name || login !== user.login) throw new BadRequest('Cannot chande infos');
    const userInfo = userSchema.safeParse(user);
    if(!userInfo.success) throw new BadRequest(userInfo.error.message);
    const passwordCrypt = await crypto(user.password);
    const userToToken = await this.model.update({...user, password: passwordCrypt});
    const tokenUp = jwtHash(userToToken);
    return tokenUp;
  }
}