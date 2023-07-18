import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface MessageProps {
  content: string,
  role: string,
}

export function Message({role, content}: MessageProps) {
  const cbImage = 'https://st4.depositphotos.com/4320021/22407/v/600/depositphotos_224075966-stock-illustration-cute-smiling-robot-chat-bot.jpg';
  return (
    <div className='flex gap-3 text-slate-600 text-sm'>
  {
  role === "assistant" && 
    <Avatar>
      <AvatarFallback>CB</AvatarFallback>
      <AvatarImage src={cbImage} />
    </Avatar>
  }
{ role ==="assistant" ? <p className='leading-relaxed'>{content}</p> :
 <p className='leading-relaxed ml-auto'>{content}</p> }
</div>)
}