import { Button } from "./ui/button";

export function LoginOrRegister() {


  return (
    <div className="bg-gray-50 rounded-md mb-3">
      <p className="pl-3">We need you do a Login! Do you need register?</p>
      <div className="grid justify-items-start pl-1 pr-1 gap-y-2">
        <Button className="border w-full h-8 bg-white text-slate-500">
          Login
        </Button>
        <Button className="border w-full h-8 mb-1 bg-white text-slate-500">
          Registro
        </Button>
        </div>
    </div>
  )
}