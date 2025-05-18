// import "../global.css";

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="storybook" options={{ headerShown: false }} />
    </Stack>
  );
}
