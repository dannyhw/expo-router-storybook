import { Stack } from "expo-router";
import { View } from "react-native";
import StorybookUI from "../.rnstorybook";

export default function Storybook() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />

      <StorybookUI />
    </View>
  );
}
