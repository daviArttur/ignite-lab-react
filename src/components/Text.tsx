// Clsx
import { clsx } from "clsx"

// Types
import type { ReactNode } from "react";

// Radix
import { Slot } from "@radix-ui/react-slot"
export interface TextProps {
   children: ReactNode;
   size?: "sm" | "md" | "lg";
   asChild?: boolean
}

const Text = ({ size = "md", children, asChild }: TextProps) => {

   const Comp = asChild ? Slot : "span";

   return (
      <Comp className={clsx(
         "text-gray-100",
         {
            "text-xs": size === "sm",
            "text-sm": size === "md",
            "text-md": size === "lg"
         }
      )}>
         { children }
      </Comp>
   )
}

export { Text };