import Svg_close from "@/assets/images/close.svg";
import Svg_key from "@/assets/images/key.svg";
import Svg_moon from "@/assets/images/moon.svg";
import Svg_ircmainlogo from "@/assets/svgs/ircmainlogo.svg";
import Svg_irctitlelogo from "@/assets/svgs/irctitlelogo.svg";
import CustomButton from "@/components/common/CustomButton";
import { Box } from "@/components/ui/box";
import { router } from "expo-router";
import React from "react";
import { Dimensions, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

const { height } = Dimensions.get("screen");

export default function LoginScreen() {
  return (
    <Box
      className=" justify-center items-center bg-white"
      style={{ height: height }}
    >
      <Box className="py-4 flex-row-reverse justify-between items-center px-5 w-full">
        <TouchableOpacity onPress={() => router.back()}>
          <Svg_close width={30} height={30} />
        </TouchableOpacity>
        <Svg_moon width={25} height={25} />
      </Box>
      <Box className="bg-white px-6 pt-10 h-fit w-full flex-auto">
        <Box className="flex-row-reverse items-center self-center">
          <Svg_ircmainlogo width={40} />
          <Svg_irctitlelogo width={80} />
        </Box>

        <Box className="my-14">
          <Text
            style={{ fontFamily: "esb", direction: "rtl" }}
            className="text-black mb-2 text-center text-xl"
          >
            ورود به حساب کاربری
          </Text>
          <Text
            style={{ fontFamily: "er", direction: "rtl" }}
            className="text-gray-500 text-center"
          >
            با استفاده از شماره موبایل و رمزعبورتان وارد شوید
          </Text>
        </Box>

        <TextInput
          style={{ textAlign: "right", fontFamily: "er" }}
          outlineStyle={{ direction: "rtl" }}
          className="w-full"
          mode="outlined"
          label="شماره موبایل"
        />
        <TextInput
          style={{ textAlign: "right", fontFamily: "er" }}
          secureTextEntry
          outlineStyle={{}}
          className="w-full"
          mode="outlined"
          label="رمز عبور"
          passwordRules="*"
        />
        <Box className="flex-row-reverse items-center gap-2">
          <Svg_key width={20} height={20} />
          <Text
            style={{ fontFamily: "er", direction: "rtl" }}
            className="text-base_blue_color my-2"
          >
            فراموشی رمزعبور
          </Text>
        </Box>
        <Text
          style={{ fontFamily: "er", direction: "rtl" }}
          className="text-base_blue_color mb-2 mt-10"
        >
          ساخت حساب کاربری جدید
        </Text>
        <Text
          style={{ fontFamily: "er", direction: "rtl" }}
          className="text-gray-500 mb-2 text-center"
        >
          V2.15.0-g
        </Text>
      </Box>

      <Box
        className="min-w-full bg-gray-50 py-14 flex-auto bottom-0 flex-row px-5"
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <CustomButton label="ورود کاربران" />
      </Box>
    </Box>
  );
}
