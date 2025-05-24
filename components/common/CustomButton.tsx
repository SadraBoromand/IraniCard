import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Box } from "../ui/box";

export default function CustomButton({
  label,
  onPress,
}: {
  label: string;
  onPress?: any;
}) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <Box className="bg-base_blue_color px-8 py-3 w-fit min-h-fit h-fit max-w-fit rounded-md">
        <Text
          style={{ fontFamily: "er", textAlign: "center" }}
          className="text-white"
        >
          {label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}
