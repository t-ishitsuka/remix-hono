import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

type T = typeof Button;
type Story = StoryObj<T>;

const meta: Meta<T> = {
  title: "Component/Button",
  component: Button,
} satisfies Meta<T>;

export default meta;

export const Default: Story = {
  args: {
    children: "Default",
  },
};
