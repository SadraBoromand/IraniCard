import { ICategoryItem } from "@/app/tab_screens/categories";
import Svg_left from "@/assets/images/left.svg";
import React from "react";
import { Text } from "react-native";
import { Box } from "../ui/box";

export default function CategoryItem({ item }: { item: ICategoryItem }) {
  return (
    <Box className="mb-5 flex-row items-center gap-2 justify-between">
      <Box className="flex-row items-center gap-2">
        {item.icon}
        <Box>
          <Text style={{ fontFamily: "esb" }} className="text-black">
            {item.title}
          </Text>
          <Text style={{ fontFamily: "er" }} className="text-sm text-gray-600">
            {item.subtitle}
          </Text>
        </Box>
      </Box>
      <Svg_left width={25} height={25} />
    </Box>
  );
}
