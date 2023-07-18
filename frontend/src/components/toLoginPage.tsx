import { useGlobalContext } from "@/app/Context/chatbot";
import { Button } from "./ui/button";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export function ToLoginPage() {
  const { isLoged } = useGlobalContext();
  const rout = useRouter();
  

  const onClickLogin = (e: FormEvent) => {
    e.preventDefault();
    if (!isLoged) rout.push('/login'); 
  }

  const onClickRegister = (e: FormEvent) => {
    e.preventDefault();
    if (!isLoged) rout.push('/register');
  }
  return (
    <div className="bg-gray-50 rounded-md mb-3">
      <p className="pl-3">We need you do a Login! Do you need register?</p>
      <div className="grid justify-items-start pl-1 pr-1 gap-y-2">
        <Button
          className="border w-full h-8 bg-white text-slate-500"
          type="button"
          onClick={onClickLogin}  
        >
          Login
        </Button>
        <Button className="border w-full h-8 mb-1 bg-white text-slate-500"
        type="button"
        onClick={onClickRegister}  
        >
          Registro
        </Button>
        </div>
    </div>
  )
}