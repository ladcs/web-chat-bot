/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Button } from "./ui/button";
import { Card, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from 'ai/react'
import { FormEvent, useEffect } from "react";
import { v4 } from 'uuid';
import { loginOrRegister, toLoan } from "@/lib/utils";
import { ChatHeader } from "./ChatHeader";
import { ContentChat } from "./ContentChat";
import { ScrollArea } from "./ui/scroll-area";
import { useGlobalContext } from '../app/Context/chatbot';
import jwt_decode from "jwt-decode";
import { useRouter } from "next/navigation";
import { api } from "@/lib/axios";

interface IMessage {
  content: string,
  createdAt: Date,
  role: "function" | "user" | "system" | "assistant",
  id: string,
}

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, setMessages, setInput } = useChat();
  const { isLoged, setIsLoged, setName, contextMessages, setContextMessages, name, isActive, setIsActive } = useGlobalContext();

  const router = useRouter();

  useEffect(()=> {
    const token = localStorage.getItem('token');
    setMessages([...contextMessages])
    if (token !== null) {
      const decodeToken = jwt_decode(token);
      //@ts-ignore
      if(decodeToken.exp * 1000 < Date.now()) {
        setIsLoged(false);
      } else {
        //@ts-ignore
        setName(decodeToken.name)
        setIsLoged(true);
      }
    } else {
      setIsLoged(false);
    }
  }, []);

  useEffect(() => {
    if(name !== null) {
      const helloUser: IMessage = {
        content: `Hello, ${name}, what can I help you?`,
        createdAt: new Date(),
        role: 'assistant',
        id: v4(),
      }
        setContextMessages([...contextMessages, helloUser]);
      }
  }, [name])
  
  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!isActive) {
      const commandToBegin = ['HELLO', 'GOOD', 'I WANT', 'Goodbye'];
      const upperInput = input.toUpperCase();
      if (commandToBegin.includes(upperInput)) {
        setIsActive(true);
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
        setContextMessages([...messages, msgUser, msgAssist]);
      }

    }
    if(isLoged) {
      const upperInput = input.toUpperCase();
      const haveLoan = upperInput.split(' ');
      if(haveLoan.includes('LOAN')) {
        const msgUser: IMessage = {
          content: input,
          createdAt: new Date(),
          role: 'user',
          id: v4(),
        }
        const msgAssist: IMessage = {
          content: toLoan(),
          createdAt: new Date(),
          role: 'assistant',
          id: v4(),
        }
        setMessages([...messages, msgUser, msgAssist]);
        setContextMessages([...messages, msgUser, msgAssist]);
      }
      if (upperInput === 'GOODBYE') {
        setIsActive(false);
        setContextMessages([]);
        const toDbInfo = {
          user: name,
          date: new Date().toISOString(),
        }
        api.post('/chat', toDbInfo).then()
        .catch(err => alert(err));
        localStorage.removeItem('token');
        setName('');
        setIsLoged(false);
        router.push('/export');
      }
      if (isActive) {
        const msgUser: IMessage = {
          content: input,
          createdAt: new Date(),
          role: 'user',
          id: v4(),
        }
        if (upperInput !== 'GOODBYE') {
          //@ts-ignore
          handleSubmit(e, msgUser);
        }
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
      <form className="w-full flex gap-2" onSubmit={sendMessage}>
        <Input placeholder='digit your message' value={input} onChange={handleInputChange} />
        <Button type='button' onClick={sendMessage}>send</Button>
      </form>
    </CardFooter>
  </Card>)
}