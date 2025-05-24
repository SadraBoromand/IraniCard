import React from "react";
import { ScrollView, Text } from "react-native";
import { Box } from "../ui/box";
import DastBeNagdItem from "./DastBeNagdItem";

const data = [...Array(8).keys()];

export default function DastBeNagd({
  title,
  isNew = false,
}: {
  title: string;
  isNew?: boolean;
}) {
  return (
    <Box className="mr-5 mb-2">
      <Box className="flex-row-reverse gap-2 items-center my-4">
        <Text className="text-black text-right " style={{ fontFamily: "eb" }}>
          {title}
        </Text>
        {isNew && (
          <Text
            className="bg-blue-100 text-sm text-base_blue_color py-2 px-3 rounded-full"
            style={{ fontFamily: "esb" }}
          >
            جدید
          </Text>
        )}
      </Box>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ direction: "rtl" }}
      >
        {data?.map((item, index) => (
          <DastBeNagdItem key={item} index={item} />
        ))}
      </ScrollView>
    </Box>
  );
}
