import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ApplyLoan } from "./ApplyLoan";
import { ConditionLoan } from "./ConditionLoan";
import { HelpLoan } from "./help";

export function ToLoanConfig() {
  const [isHelp, setIsHelp] = useState(false);
  const [isApply, setIsApply] = useState(false);
  const [isCondition, setIsCondition] = useState(false);
  const help = (e: FormEvent) => {
    e.preventDefault();
    setIsApply(false);
    setIsCondition(false);
    setIsHelp(true);
  }

  const apply = (e: FormEvent) => {
    e.preventDefault();
    setIsApply(true);
    setIsCondition(false);
    setIsHelp(false);
  }

  const condition = (e: FormEvent) => {
    e.preventDefault();
    setIsApply(false);
    setIsCondition(true);
    setIsHelp(false);
  }

  return (
    isHelp ? <HelpLoan /> : isApply ? <ApplyLoan /> : isCondition ? <ConditionLoan /> : (
    <div className="bg-gray-50 rounded-md loan">
      <div className="grid justify-items-start pl-1 pr-1 gap-y-2">
        <Button
        className="border w-full h-8 bg-white text-slate-500 mt-1"
        type="button"
        onClick={apply}
        >Do you want to apply for a loan?</Button>
        <Button
        className="border w-full h-8 bg-white text-slate-500"
        type="button"
        onClick={condition}
        >Loan conditions</Button>
        <Button className="border w-full h-8 bg-white text-slate-500 mb-1"
        type="button"
        onClick={help}
        >Help</Button>
      </div>
    </div>)
  )
}