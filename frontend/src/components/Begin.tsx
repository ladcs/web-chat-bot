import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Begin() {
  const cbImage = 'https://st4.depositphotos.com/4320021/22407/v/600/depositphotos_224075966-stock-illustration-cute-smiling-robot-chat-bot.jpg';
  return(
  <div className='flex gap-3 text-slate-600 text-sm'>
    <Avatar>
      <AvatarFallback>CB</AvatarFallback>
      <AvatarImage src={cbImage} />
    </Avatar>
    <div className="bg-gray-50 rounded-md mb-3">
      <p className='leading-relaxed pl-3'>To start digit: Hello or Good or I want, and Goodbye to end.</p>
    </div>
  </div>)
}