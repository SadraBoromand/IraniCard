import MainLayout from "@/components/common/MainLayout";
import AmazonSection from "@/components/dashboard/AmazonSection";
import CaroscalSection from "@/components/dashboard/CaroscalSection";
import DastBeNagd from "@/components/dashboard/DastBeNagd";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView } from "react-native";

export default function dashboardScreen() {
  return (
    <MainLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CaroscalSection />
        <AmazonSection />
        <DastBeNagd title="دست به نقد" isNew />
        <DastBeNagd title="گیف کارت های پرفروش" />
        <DastBeNagd title="خدمات سفر" />
      </ScrollView>
      <StatusBar style="dark" backgroundColor="#fff" />
    </MainLayout>
  );
}
