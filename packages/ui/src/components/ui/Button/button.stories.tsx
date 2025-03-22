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

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const Sm: Story = {
  args: {
    size: "sm",
    children: "Link",
  },
};

export const Lg: Story = {
  args: {
    size: "lg",
    children: "Link",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: "Link",
  },
};
