import React from "react";
import { FlatList } from "react-native";
import { Box } from "../ui/box";
import AmazonItem from "./AmazonItem";

export default function AmazonList() {
  return (
    <Box>
      <FlatList
        horizontal
        style={{ direction: "rtl" }}
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled
        data={[...Array(6).keys()]}
        renderItem={({ item }) => <AmazonItem />}
        keyExtractor={(item, index) => item.toString()}
      />
    </Box>
  );
}
