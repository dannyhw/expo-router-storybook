import "../global.css";

import { registerDevMenuItems } from "expo-dev-menu";
import { Stack, router } from "expo-router";

registerDevMenuItems([
  {
    name: "Storybook",
    callback: () => {
      router.replace("/storybook");
    },
  },
  {
    name: "App root",
    callback: () => {
      router.replace("/");
    },
  },
]);

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: true, headerBackVisible: true }}
      />

      <Stack.Protected guard={process.env.EXPO_PUBLIC_STORYBOOK === "true"}>
        <Stack.Screen
          name="storybook"
          options={{ headerShown: false, headerBackVisible: false }}
        />
      </Stack.Protected>
    </Stack>
  );
}
