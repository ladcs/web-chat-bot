import Link from "next/link";

export function ApplyLoan() {
  return(<div className="bg-gray-50 rounded-md loan">
  <p className="leading-relaxed pr-3 pl-2">Here you can apply to a <Link target='_blank' className='text-blue-600 dark:text-blue-500 hover:underline' href={'https://www.bb.com.br/site/pra-voce/emprestimo/emprestimo-pessoal/?_ga=2.170929888.1742684666.1689732540-221590343.1689732539'}>loan</Link> in Brazil.</p>
</div>)
}