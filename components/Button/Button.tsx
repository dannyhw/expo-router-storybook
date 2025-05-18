import { Text, TouchableOpacity } from "react-native";

export type MyButtonProps = {
  onPress?: () => void;
  text: string;
};

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <TouchableOpacity
      className="px-4 py-2 bg-purple-500 rounded-md"
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text className="text-white">{text}</Text>
    </TouchableOpacity>
  );
};
