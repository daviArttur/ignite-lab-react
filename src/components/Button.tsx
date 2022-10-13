// Clsx
import { clsx } from "clsx"

// Types
import type { ReactNode } from "react";

export interface ButtonProps {
   children: string;
}

const Button = ({ children }: ButtonProps) => {

   return (
      <button className="
         bg-cyan-500 px-4 py-3 w-full max-w-[400px] rounded text-black font-bold text-sm transition-colors
         focus:ring-2 ring-white
         hover:bg-cyan-400">
         { children }
      </button>
   )
}

export { Button };