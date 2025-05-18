import "../global.css";

import { registerDevMenuItems } from "expo-dev-menu";

import { router, Stack } from "expo-router";

registerDevMenuItems([
  {
    name: "Go to app",
    callback: () => {
      router.push("/");
    },
  },
  {
    name: "Go to Storybook",
    callback: () => {
      router.push("/storybook");
    },
  },
]);

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />

      <Stack.Protected guard={process.env.EXPO_PUBLIC_STORYBOOK === "true"}>
        <Stack.Screen name="storybook" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}
