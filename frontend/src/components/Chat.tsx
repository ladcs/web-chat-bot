'use client'

import { Button } from "./ui/button";
import { Card, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from 'ai/react'
import { useState, FormEvent } from "react";
import { v4 } from 'uuid';
import { loginOrRegister } from "@/lib/utils";
import { ChatHeader } from "./ChatHeader";
import { ContentChat } from "./ContentChat";
import { ScrollArea } from "./ui/scroll-area";

interface IMessage {
  content: string,
  createdAt: Date,
  role: "function" | "user" | "system" | "assistant",
  id: string,
}

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, setMessages, setInput } = useChat();
  const [isActive, setIsActive] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const activedChat = (e: FormEvent) => {
    e.preventDefault();
    if(!isLogged) {
      const commandToBegin = ['HELLO', 'GOOD', 'I WANT'];
      const upperInput = input.toUpperCase();
      const msgUser: IMessage = {
        content: input,
        createdAt: new Date(),
        role: 'user',
        id: v4(),
      }
      setMessages([...messages, msgUser]);
      if(commandToBegin.includes(upperInput)) {
        const msgAssist: IMessage = {
          content: loginOrRegister(),
          createdAt: new Date(),
          role: 'assistant',
          id: v4(),
        }
        setIsActive(true);
        setMessages([...messages, msgUser, msgAssist]);
      } 
      setInput('');
    }
  }

  return (
  <Card className='w-[400px] bg-slate-200'>
    <ChatHeader/>
    <ScrollArea className="h-[640px] w-full space-y-4 pr-4">
      <ContentChat messages={messages}/>
    </ScrollArea>
    <CardFooter>
      <form className="w-full flex gap-2" onSubmit={activedChat}>
        <Input placeholder='to begin' value={input} onChange={handleInputChange} />
        <Button type='button' onClick={activedChat}>send</Button>
      </form>
    </CardFooter>
  </Card>)
}