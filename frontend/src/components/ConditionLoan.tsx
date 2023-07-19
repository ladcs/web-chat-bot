import Link from "next/link";

export function ConditionLoan() {
  return(<div className="bg-gray-50 rounded-md loan">
  <p className="leading-relaxed pr-3 pl-2">Here you can find more conditions for a <Link className='text-blue-600 dark:text-blue-500 hover:underline' target='_blank' href={'https://www.bcb.gov.br/'}>loan</Link> in Brazil.</p>
</div>)
}