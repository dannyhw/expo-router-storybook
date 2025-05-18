import { Link as ELink } from "expo-router";
import { Text } from "react-native";

export const Link = () => {
  return (
    <ELink href="/">
      <Text className="text-blue-500">Link</Text>
    </ELink>
  );
};
