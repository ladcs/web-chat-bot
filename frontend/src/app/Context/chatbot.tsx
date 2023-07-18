'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
  isLoged: boolean,
  setIsLoged: Dispatch<SetStateAction<boolean>>,
  inLogin: boolean,
  setInLogin: Dispatch<SetStateAction<boolean>>,
  inRegister: boolean,
  setInRegister: Dispatch<SetStateAction<boolean>>,
}

const GlobalContext = createContext<ContextProps>({
  isLoged: false,
  setIsLoged: (): boolean => false,
  inLogin: false,
  setInLogin: (): boolean => false,
  inRegister: false,
  setInRegister: (): boolean => false,
})

export const GlobalContextProvider = ({ children }: any) => {
  const [isLoged, setIsLoged] = useState(false);
  const [inLogin, setInLogin] = useState(false);
  const [inRegister, setInRegister] = useState(false);

  return (
    <GlobalContext.Provider value={{
      isLoged,
      setIsLoged,
      inLogin,
      setInLogin,
      inRegister,
      setInRegister
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);