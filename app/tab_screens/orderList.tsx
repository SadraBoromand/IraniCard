import Svg_emptyorders from "@/assets/svgs/emptyorders.svg";
import CustomButton from "@/components/common/CustomButton";
import MainLayout from "@/components/common/MainLayout";
import { Box } from "@/components/ui/box";
import { router } from "expo-router";
import React from "react";
import { FlatList, Text } from "react-native";

const data: any[] = [];

export default function orderList() {
  return (
    <MainLayout>
      <FlatList
        data={data}
        renderItem={({ item }) => <Box></Box>}
        keyExtractor={(item) => item.toString()}
        ListEmptyComponent={
          <Box className="flex-col justify-center items-center gap-2 px-4 pt-32">
            <Svg_emptyorders width={"100%"} />
            <Text
              style={{ fontFamily: "esb" }}
              className="text-gray-500 text-lg text-center my-5"
            >
              لطفا برای مشاهده سبد خرید، وارد حساب کاربری خود شوید
            </Text>
            <CustomButton
              onPress={() => router.push("/login")}
              label="ورود به حساب کاربری"
            />
          </Box>
        }
      />
    </MainLayout>
  );
}
