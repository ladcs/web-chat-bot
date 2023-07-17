import * as dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config()

export const crypto = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt)
  return passwordHash;
}

export const verify = async (password: string, dbPassword: string): Promise<boolean> => {
  const isOkay = await bcrypt.compare(password, dbPassword)
  return isOkay;
}