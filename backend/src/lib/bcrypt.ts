import * as dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config()

const SUPER_SECRET = process.env.BYCRIPT_SECRET ?? 123456789;

export const crypto = async (password: string): Promise<string> => {
  const passwordHash = await bcrypt.hash(password, SUPER_SECRET)
  return passwordHash;
}

export const verify = async (password: string, dbPassword: string): Promise<boolean> => {
  const isOkay = await bcrypt.compare(password, dbPassword)
  return isOkay;
}