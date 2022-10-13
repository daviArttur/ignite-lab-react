// Conponent
import { Text, TextProps } from "./Text";

// StoryBook
import { Meta, StoryObj } from "@storybook/react";

export default {
   title: "Components/Text",
   component: Text,
   args: {
      children: "Lorem ipsum.",
      size: "md"
   },
   argTypes: {
      size: {
         options: ["sm", "md", "lg"],
         control: {
            type: "inline-radio"
         }
      }
   }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
   args: {
      size: "sm",
   }
};

export const Large: StoryObj<TextProps> = {
   args: {
      size: "lg",
   }
};

export const CustomComponent: StoryObj<TextProps> = {
   args: {
      asChild: true,
      children: (
         <p>Transform "span" in "p"</p>
      )
   },
   argTypes: {
      children: {
         table: {
            disable: true
         }
      },
      asChild: {
         table: {
          disable: true
         }
      }
   }
};