import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { TUser } from '../schema/User';
import BadRequest from '../error/BadRequest';

dotenv.config()

const SUPER_SECRET = process.env.JWT_SECRET ?? '123456789';

export const jwtHash = (info: Partial<TUser>): string => {
  const token = jwt.sign(info, SUPER_SECRET, { algorithm: 'RS256', expiresIn: '1D' });
  return token;
}

export const jwtVerify = (token: string): jwt.JwtPayload => {
  const decode = jwt.verify(token, SUPER_SECRET);
  if (typeof decode === 'string') throw new BadRequest(decode);
  return decode;
}