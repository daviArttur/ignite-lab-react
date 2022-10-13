// Types
import { Slot } from "@radix-ui/react-slot";
import type { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps { children: ReactNode }
export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}
export interface TextInputIconsProps { children: ReactNode}

function TextInputRoot({ children }: TextInputRootProps) {

   return (
      <div className="h-12 flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full max-w-[400px] focus-within:ring-2 ring-cyan-400">
         { children }
      </div>
   )
};

function TextInputIcon (props: TextInputIconsProps) {

   return (
      <Slot className=" w-6 h-6 text-gray-400">
         { props.children }
      </Slot>
   )
}

function TextInputInput (props: TextInputInputProps) {
   return (
      <input 
         className="bg-transparent outline-none flex-1  text-gray-100 text-xs"
         { ...props }
      />
   )
}

export const TextInput = {
   Root: TextInputRoot,
   Input: TextInputInput,
   Icon: TextInputIcon
}