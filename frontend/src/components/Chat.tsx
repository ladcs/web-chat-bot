'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area";
import { useState } from "react";
import { Message } from "./message";

export function Chat() {
  const cbImage = 'https://st4.depositphotos.com/4320021/22407/v/600/depositphotos_224075966-stock-illustration-cute-smiling-robot-chat-bot.jpg';
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const  [isActive, setIsActive] = useState(false);
  const activedChat = () => {
    const commandToBegin = ['HELLO', 'GOOD', 'I WANT']
    const upperInput = input.toUpperCase();
    if(commandToBegin.includes(upperInput)) setIsActive(true)
  }

  return (
  <Card className='w-[400px]'>
    <CardHeader>
      <CardTitle>Chat Bot</CardTitle>
      <CardDescription>Chat bot make with nextjs and express.</CardDescription>
    </CardHeader>
    <CardContent>
      <ScrollArea className="h-[640px] w-full space-y-4 pr-4">
        <div className='flex gap-3 text-slate-600 text-sm'>
          <Avatar>
            <AvatarFallback>CB</AvatarFallback>
            <AvatarImage src={cbImage} />
          </Avatar>
          <p className='leading-relaxed'>To start digit: Hello or Good or I want, and Goodbye when end.</p>
        </div>
        { messages.map(message => {
          return(
            <Message
              key={message.id}
              role={message.role}
              content={message.content} />
          )
        })}
      </ScrollArea>
    </CardContent>
    <CardFooter>
      <form className="w-full flex gap-2" onSubmit={handleSubmit}>
        <Input placeholder='to begin' value={input} onChange={handleInputChange} />
        <Button type='submit'>send</Button>
      </form>
    </CardFooter>
  </Card>)
}