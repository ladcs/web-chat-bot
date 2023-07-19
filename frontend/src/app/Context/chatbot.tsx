'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface IMessage {
  content: string,
  createdAt?: Date | undefined,
  role: "function" | "user" | "system" | "assistant",
  id: string,
}

interface ContextProps {
  isLoged: boolean,
  setIsLoged: Dispatch<SetStateAction<boolean>>,
  name: string,
  setName: Dispatch<SetStateAction<string>>,
  contextMessages: Array<IMessage>,
  setContextMessages: Dispatch<SetStateAction<IMessage[]>>,
}

const GlobalContext = createContext<ContextProps>({
  isLoged: false,
  setIsLoged: (): boolean => false,
  name: '',
  setName: (): string => '',
  contextMessages: [],
  setContextMessages: (): IMessage[] => [],
})

export const GlobalContextProvider = ({ children }: any) => {
  const [isLoged, setIsLoged] = useState(false);
  const [name, setName] = useState('');
  const [contextMessages, setContextMessages] = useState<IMessage[]>([]);

  return (
    <GlobalContext.Provider value={{
      contextMessages,
      setContextMessages,
      isLoged,
      setIsLoged,
      name,
      setName
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);