import { z } from 'zod';

const userSchema =  z.object({
  name: z.string().min(3),
  login: z.string().min(5),
  password: z.string().min(8),
});

export default userSchema;