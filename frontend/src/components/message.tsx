import { ToLoanConfig } from "./ToLoanConfig";
import { ToLoginPage } from "./toLoginPage";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface MessageProps {
  content: string,
  role: string,
}

export function MessageInChat({role, content}: MessageProps) {
  const cbImage = 'https://st4.depositphotos.com/4320021/22407/v/600/depositphotos_224075966-stock-illustration-cute-smiling-robot-chat-bot.jpg';

  const renderContent = () => {
    const loginDiv = content.split('div class="bg-gray-50 rounded-md login">');
    const loanDiv = content.split('div class="bg-gray-50 rounded-md loan">');
    if (loginDiv[0] === '<') return <ToLoginPage />
    if (loanDiv[0] === '<') return <ToLoanConfig />
    return (
      <div className="bg-gray-50 rounded-md ml-auto mb-3">
        <p className='leading-relaxed pl-3'>{content}</p>
      </div>
    )
  }

  return (
    <div className='flex gap-3 text-slate-600 text-sm'>
  {
  role === "assistant" && 
    <Avatar>
      <AvatarFallback>CB</AvatarFallback>
      <AvatarImage src={cbImage} />
    </Avatar>
  }
  { role ==="assistant" ? renderContent() :
  <div className="bg-gray-50 rounded-md ml-auto mb-3">
    <p className='leading-relaxed pr-3 pl-2'>{content}</p> 
  </div>
  }
</div>)
}