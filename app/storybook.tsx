import { Stack } from "expo-router";
import { View } from "react-native";
import StorybookUI from "../.storybook";

export default function Storybook() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />

      <StorybookUI />
    </View>
  );
}
