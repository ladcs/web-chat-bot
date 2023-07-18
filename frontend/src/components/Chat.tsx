'use client'

import { Button } from "./ui/button";
import { Card, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from 'ai/react'
import { FormEvent, useEffect } from "react";
import { v4 } from 'uuid';
import { loginOrRegister } from "@/lib/utils";
import { ChatHeader } from "./ChatHeader";
import { ContentChat } from "./ContentChat";
import { ScrollArea } from "./ui/scroll-area";
import { useGlobalContext } from '../app/Context/chatbot';
import jwt_decode from "jwt-decode";

interface IMessage {
  content: string,
  createdAt: Date,
  role: "function" | "user" | "system" | "assistant",
  id: string,
}

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, setMessages, setInput } = useChat();
  const { isLoged, setIsLoged, setName } = useGlobalContext();

  useEffect(()=> {
    const token = localStorage.getItem('token');
    if (token !== null) {
      const decodeToken = jwt_decode(token);
      //@ts-ignore
      if(decodeToken.exp * 1000 < Date.now()) {
        setIsLoged(false);
      } else {
        //@ts-ignore
        setName(token.name)
        setIsLoged(true);
      }
    } else {
      setIsLoged(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const activedChat = (e: FormEvent) => {
    e.preventDefault();
    if (!isLoged) {
      const commandToBegin = ['HELLO', 'GOOD', 'I WANT', 'Goodbye'];
      const upperInput = input.toUpperCase();
      if (commandToBegin.includes(upperInput)) {
        const msgUser: IMessage = {
          content: input,
          createdAt: new Date(),
          role: 'user',
          id: v4(),
        }
        const msgAssist: IMessage = {
          content: loginOrRegister(),
          createdAt: new Date(),
          role: 'assistant',
          id: v4(),
        }
        setMessages([...messages, msgUser, msgAssist]);
      } 
    }
    setInput('');
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