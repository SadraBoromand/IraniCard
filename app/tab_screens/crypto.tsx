import cryptoData from "@/assets/cryptoData.json";
import MainLayout from "@/components/common/MainLayout";
import CryptoItem, { ICrypto } from "@/components/crypto/CryptoItem";
import React from "react";
import { FlatList } from "react-native";

export default function CryptoScreen() {
  return (
    <MainLayout>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Object.values(cryptoData)}
        renderItem={({ item }: { item: ICrypto }) => <CryptoItem item={item} />}
        keyExtractor={(item, i) => i.toString()}
      />
    </MainLayout>
  );
}
