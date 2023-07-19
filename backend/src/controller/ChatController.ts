import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ChatService from "../service/ChatService";

export default class UserController {
  private service: ChatService;

  constructor() {
    this.service = new ChatService();
  }

  create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const  { user, date } = req.body;
      console.log(date)
      const created = await this.service.create({user, date});
      return res.status(StatusCodes.OK).json(created);
    } catch (error) {
      next(error);
    }
  };

  readAll = async (_req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const allChats = await this.service.read();
      return res.status(StatusCodes.OK).json(allChats);
    } catch (error) {
      next(error);
    }
  }
}
