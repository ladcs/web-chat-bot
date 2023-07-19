import { z } from 'zod';

const chatSchema =  z.object({
  user: z.string().min(3),
  date: z.string(),
});

export default chatSchema;