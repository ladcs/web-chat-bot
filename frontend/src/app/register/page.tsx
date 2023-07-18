import { LoginOrRegister } from "@/components/loginAndRegister"

export default function Home() {
  return (
    <div className='flex items-center min-h-screen bg-slate-300 justify-center'>
      <LoginOrRegister isRegister={true} />
    </div>
  )
}
