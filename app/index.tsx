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
      <MyButton onPress={() => router.push("/storybook")} text="Press me" />
    </View>
  );
}
