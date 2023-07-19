import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../service/UserService";

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  login = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const  { login, password } = req.body;
      const token = await this.service.login({login, password});
      return res.status(StatusCodes.OK).json(token);
    } catch (error) {
      next(error);
    }
  };

  createUser = async (req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const  { login, password, name } = req.body;
      const token = await this.service.newUser({ login, password, name })
      return res.status(StatusCodes.OK).json(token);
    } catch (error) {
      next(error);
    }
  }
}
