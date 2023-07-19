import Link from "next/link";

export function HelpLoan() {
  return(<div className="bg-gray-50 rounded-md loan">
  <p className="leading-relaxed pr-3 pl-2">Here you can learn more about <Link className='text-blue-600 dark:text-blue-500 hover:underline' target='_blank' href={'https://www.serasa.com.br/blog/search/?query=emprestimo'}>loan</Link> in Brazil.</p>
</div>)
}