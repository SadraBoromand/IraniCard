import Svg_calling from "@/assets/svgs/calling.svg";
import Svg_messages_bubble from "@/assets/svgs/messages_bubble.svg";
import Svg_messages_square from "@/assets/svgs/messages_square.svg";
import MainLayout from "@/components/common/MainLayout";
import { Box } from "@/components/ui/box";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableNativeFeedback } from "react-native";

interface SupportItem {
  title: string;
  subtitle: string;
  icon?: any;
  link?: any;
}

const data: SupportItem[] = [
  {
    title: "مشاوره خرید",
    subtitle: "چپ آنلاین با کارشناسان مشاور",
    icon: <Svg_messages_bubble width={60} />,
  },
  {
    title: "ارسال تیکت",
    subtitle: "ارتباط با کارشناسان فنی، پشتیبانی و فروش",
    icon: <Svg_messages_square width={60} />,
    link: 'login'
  },
  {
    title: "تماس با ایرانیکارت",
    subtitle: "ارتباط با پشتیبانی تلفنی ایرانیکارت",
    icon: <Svg_calling width={60} />,
    link: "tel:02191091000",
  },
];

export default function supportScreen() {
  return (
    <MainLayout>
      <ScrollView showsVerticalScrollIndicator={false} className="px-4">
        <Text
          style={{ fontFamily: "esb", direction: "rtl" }}
          className="text-black mb-2"
        >
          نوع پشتیبانی را انتخاب کنید:
        </Text>
        {data.map((item, _) => (
          <TouchableNativeFeedback
            key={item.title}
            background={TouchableNativeFeedback.Ripple("#93c5fd", false)}
            onPress={() => {
              console.log("click");
              item.link && router.push(item.link);
            }}
          >
            <Box className="bg-blue-50 rounded-md flex-col justify-center items-center py-8 mb-2">
              {item.icon}
              <Text
                style={{ fontFamily: "er", direction: "rtl" }}
                className="text-black text-lg mt-4"
              >
                {item.title}
              </Text>
              <Text
                style={{ fontFamily: "er", direction: "rtl" }}
                className="text-gray-500 text-sm"
              >
                {item.subtitle}
              </Text>
            </Box>
          </TouchableNativeFeedback>
        ))}
      </ScrollView>
    </MainLayout>
  );
}
