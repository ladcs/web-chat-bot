import { ScrollArea } from "@radix-ui/react-scroll-area"
import { Begin } from "./Begin"
import { CardContent } from "./ui/card"
import { MessageInChat } from "./message"

interface Message {
  content: string,
  createdAt?: Date | undefined,
  role: "function" | "user" | "system" | "assistant",
  id: string,
}

interface propsContent {
  messages: Array<Message>
}

export function ContentChat({messages}: propsContent) {
  return (
    <CardContent>
          <Begin />
          { messages.map(message => {
            return(
              <MessageInChat
                key={message.id}
                role={message.role}
                content={message.content} />
            )
          })}
      </CardContent>
  )
}