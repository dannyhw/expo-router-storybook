import { MyButton } from "@/components/Button/Button";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyButton
        onPress={() => router.replace("/storybook")}
        text={
          process.env.EXPO_PUBLIC_STORYBOOK === "true"
            ? "Go to Storybook"
            : "Won't work storybook disabled"
        }
      />
    </View>
  );
}
