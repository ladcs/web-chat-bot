import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function loginOrRegister() {
  return (
    `<div class="bg-gray-50 rounded-md login">
      <p class="pl-3">We need you do a Login! Do you need register?</p>
      <div class="grid justify-items-start pl-1 pr-1 gap-y-2">
        <button class="border w-full h-8">
          Login
        </button>
        <button class="border w-full h-8 mb-1">
          Registro
        </button>
        </div>
    </div>`
  )
}

export function toLoan() {
  return (
    `<div class="bg-gray-50 rounded-md loan">
      <div class="grid justify-items-start pl-1 pr-1 gap-y-2">
        <button
        class="border w-full h-8 bg-white text-slate-500"
        type="button">Do you want to apply for a loan?</button>
        <button
        class="border w-full h-8 bg-white text-slate-500"
        type="button">Loan conditions</button>
        <button class="border w-full h-8 bg-white text-slate-500"
        type="button">Help</button>
      </div>
    </div>`
)
}
