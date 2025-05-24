import Svg_search from "@/assets/images/search.svg";
import Svg_icsearchlogo from "@/assets/svgs/icsearchlogo.svg";
import Svg_profile from "@/assets/svgs/profile.svg";
import { router } from "expo-router";
import React from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { Box } from "../ui/box";

export default function SearchBar() {
  return (
    <Box className="flex-row-reverse justify-between items-center bg-blue-100  h-16 px-4 mx-4 mb-3 rounded-xl">
      <Pressable
        onPress={() => router.push("/search")}
        className="flex-row-reverse gap-1 items-center"
      >
        <Svg_search width={25} height={25} />
        <Text className="mr-2" style={{ fontFamily: "esb" }}>
          جستجو در
        </Text>

        <Svg_icsearchlogo width={70} />
      </Pressable>
      <Box className="border border-gray-400 rounded-full pt-1 px-0.5 w-fit h-fit">
        <TouchableOpacity
          activeOpacity={0.8}
          hitSlop={15}
          onPress={() => router.push("/login")}
        >
          <Svg_profile width={25} height={25} />
        </TouchableOpacity>
      </Box>
    </Box>
  );
}
