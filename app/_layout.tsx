import "../global.css";

import { Stack, router } from "expo-router";
import { Platform } from "react-native";

if (Platform.OS !== "web" && __DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { registerDevMenuItems } = require("expo-dev-menu");

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
}

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
