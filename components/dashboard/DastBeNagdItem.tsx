import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Box } from "../ui/box";

export default function DastBeNagdItem({ index }: { index: number }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => router.push("/details")}
    >
      <Box className="flex-col gap-1">
        {index % 2 === 0 ? (
          <Box className="flex-col items-center justify-center px-8 py-16 bg-green-700 ml-4 rounded-xl">
            <Text
              className="text-white text-right text-xl"
              style={{ fontFamily: "eb" }}
            >
              دست به نقد
            </Text>
          </Box>
        ) : (
          <Box className="flex-col items-center justify-center px-8 py-16 bg-blue-700 ml-4 rounded-xl">
            <Text
              className="text-white text-right text-xl"
              style={{ fontFamily: "eb" }}
            >
              دست به نقد
            </Text>
          </Box>
        )}
        <Box>
          <Text className="text-black" style={{ fontFamily: "er" }}>
            دست به نقد انگلیس:...
          </Text>
          <Text className="text-gray-600 text-sm" style={{ fontFamily: "er" }}>
            انگلیس لندن
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}
