import { clsx } from "clsx"
import type { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot"

export interface HeadingProps {
   children: ReactNode;
   size?: "sm" | "md" | "lg";
   asChild: boolean
}

const Heading = ({ size = "md", children, asChild }: HeadingProps) => {

   const Comp = asChild ? Slot : "h2";

   return (
      <Comp className={clsx(
         "text-gray-100 font-bold",
         {
            "text-lg": size === "sm",
            "text-xl": size === "md",
            "text-xxl": size === "lg"
         }
      )}>
         { children }
      </Comp>
   )
}

export { Heading };