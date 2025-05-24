import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Box } from "../ui/box";

export default function AmazonItem() {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => router.push("/details")}
      className="w-fit flex-col items-center ml-2"
    >
      <Box
        className="flex-col max-w-24 items-center justify-center w-24 h-24 rounded-xl"
        style={{ backgroundColor: "#231f20" }}
      >
        <Image
          style={{ width: 50, height: 50 }}
          source={require("@/assets/images/amazonTest.png")}
          contentFit="cover"
          transition={1000}
        />

        <Text
          className="text-xs text-white"
          style={{ fontFamily: "er" }}
        >{`{${"امارات"}}`}</Text>
      </Box>
      <Text className="text-white" style={{ fontFamily: "er" }}>
        آمازون
      </Text>
      <Text className="text-blue-100 text-sm" style={{ fontFamily: "er" }}>
        امارات
      </Text>
    </TouchableOpacity>
  );
}
