import Svg_search_zoom from "@/assets/images/search-zoom.svg";
import Svg_circle from "@/assets/svgs/circle.svg";
import Svg_fb_desc_background from "@/assets/svgs/fb_desc_background.svg";
import CustomButton from "@/components/common/CustomButton";
import { Box } from "@/components/ui/box";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

const text = `در حالت عادی مدت زمانی که ایرانیکارت متعهد به تحویل کالا در آن میباشد ۳۰ الی ۴۰ روز کاری روز کاری در کشور امارات از زمان تحویل به دفتر امارات ایرانیکارت است. ممکن است تحویل برخی کالا ها تیز بر اساس وزن و حجم و شرایط دیگر به زمان بیشتری نیاز داشته باشد که در این صورت توسط پشتیبانی ایرانیکارت این مورد به کاربر اطلاع رسانی می شود`;

export default function DetailsScreen() {
  const [bookmark, setBookmark] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <Box className="bg-white flex-1">
      <Box className="flex-1 bg-white" style={{ direction: "rtl" }}>
        <StatusBar backgroundColor="#fff" style="dark" />
        {/* header bookmark and exit */}
        <Box className="flex-row justify-between items-center px-5 py-5">
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            hitSlop={20}
            onPress={() => setBookmark(!bookmark)}
          >
            <FontAwesome
              name="bookmark"
              size={24}
              color={bookmark ? "#0F53D9" : "#dbeafe"}
            />
          </TouchableOpacity>
        </Box>
        {/* end header bookmark and exit */}

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* logo and title and subTitle */}
          <Box className="flex-col gap-3 items-center justify-center mb-5">
            <Svg_fb_desc_background width={"100%"} />
            <Box className="absolute flex-col gap-8">
              <Box
                style={{
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: "#d1d5db",
                }}
              >
                <Image
                  style={{
                    width: 150,
                    height: 150,
                    margin: 5,
                    borderRadius: 8,
                  }}
                  source={require("@/assets/images/amazonTest.png")}
                  contentFit="cover"
                  transition={1000}
                />
              </Box>
              <Box className="flex-col items-center justify-center gap-3">
                <Text style={{ fontFamily: "esb" }}>آمازون امارات</Text>
                <Text className="text-gray-600" style={{ fontFamily: "er" }}>
                  خرید از سایت های خارجی
                </Text>
              </Box>
            </Box>
          </Box>
          {/* end logo and title and subTitle */}

          {/* content */}
          <Box className="flex-col gap-5 px-5 pt-5">
            <Box className="flex-row justify-between items-center bg-blue-100 px-4 py-2 my-8 rounded-md">
              <Box className="flex-row gap-2 items-center">
                <Svg_search_zoom width={20} height={20} />
                <Text className="text-black" style={{ fontFamily: "er" }}>
                  جستجو و خرید در آمازون امارات
                </Text>
              </Box>
              <AntDesign name="arrowleft" size={20} color="black" />
            </Box>

            <Box>
              <Text className="text-black" style={{ fontFamily: "eb" }}>
                جزئیات سرویس
              </Text>
              <Box className="flex-row gap-3 w-full">
                <Box className="flex-row w-fit gap-1 justify-between items-center bg-blue-50 px-4 py-2 my-8 rounded-md">
                  <MaterialCommunityIcons
                    name="truck-outline"
                    size={24}
                    color="black"
                  />
                  <Text className="text-black" style={{ fontFamily: "er" }}>
                    20 الی 40 روز
                  </Text>
                </Box>
                <Box className="flex-row gap-1 w-fit justify-between items-center bg-blue-50 px-4 py-2 my-8 rounded-md">
                  <Ionicons name="link-outline" size={24} color="black" />
                  <Text className="text-black" style={{ fontFamily: "er" }}>
                    لینک سایت آمازون امارات
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box>
              <Text className="text-black" style={{ fontFamily: "eb" }}>
                شرایط و توضیحات
              </Text>
              <Box className="flex-row gap-2 items-center">
                <Svg_circle width={10} height={10} />
                <Text className="text-yellow-500" style={{ fontFamily: "er" }}>
                  شما در حال تجربه‌ی نوین ترین روش خرید اینترنتی در ایران هستید.
                </Text>
              </Box>
              <Text className="text-black" style={{ fontFamily: "er" }}>
                {showMore ? text : `${text.substring(0, 180)}...`}
              </Text>
              <Button
                mode="text"
                onPress={() => setShowMore(!showMore)}
                labelStyle={{ fontFamily: "esb" }}
              >
                بیشتر
              </Button>
            </Box>
          </Box>
          {/* end content */}
        </ScrollView>
      </Box>
      <Box
        className="h-fit max-h-24 bg-gray-50 flex-auto bottom-0 px-5"
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Box className="my-5">
          <CustomButton label="ثبت سفارش" />
        </Box>
      </Box>
    </Box>
  );
}
