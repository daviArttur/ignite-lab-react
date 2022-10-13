// Conponent
import { Button, ButtonProps } from "./Button";

// StoryBook
import { Meta, StoryObj } from "@storybook/react";

export default {
   title: "Components/Button",
   component: Button,
   args: {
      children: "Lorem ipsum.s",
   },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}