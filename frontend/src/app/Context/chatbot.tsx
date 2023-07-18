'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
  isLoged: boolean,
  setIsLoged: Dispatch<SetStateAction<boolean>>,
  name: string,
  setName: Dispatch<SetStateAction<string>>,
}

const GlobalContext = createContext<ContextProps>({
  isLoged: false,
  setIsLoged: (): boolean => false,
  name: '',
  setName: (): string => '',
})

export const GlobalContextProvider = ({ children }: any) => {
  const [isLoged, setIsLoged] = useState(false);
  const [name, setName] = useState('');

  return (
    <GlobalContext.Provider value={{
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