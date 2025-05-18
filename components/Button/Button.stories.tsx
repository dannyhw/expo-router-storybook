import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { MyButton } from "./Button";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <View className="p-4 items-start">{children}</View>;
};

const meta = {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const AnotherExample: Story = {
  args: {
    text: "Another example",
  },
};
