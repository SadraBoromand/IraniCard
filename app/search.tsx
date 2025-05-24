import { Box } from "@/components/ui/box";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { TextInput } from "react-native";

export default function SearchScreen() {
  return (
    <Box className="flex-1 bg-white">
      <StatusBar backgroundColor="#dbeafe" style="dark" />
      <Box
        className="flex-row gap-1 items-center bg-blue-100 px-2 py-2"
        style={{ direction: "rtl" }}
      >
        <Feather onPress={()=>router.back()} name="chevron-right" size={30} color="black" />
        <TextInput
          className="flex-1"
          placeholder="جستجو در ایرانیکارت"
          style={{ fontFamily: "esb" }}
        />
        <AntDesign name="search1" size={28} color="black" />
      </Box>
    </Box>
  );
}
