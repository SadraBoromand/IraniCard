import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Box } from "../ui/box";

export interface ICrypto {
  buy: {
    dname: any;
    symbol: any;
    logo: any;
    coinmarketcap_id: any;
    price: any;
    active: any;
  };
  sell: {
    price: any;
    active: any;
  };
}

export default function CryptoItem({ item }: { item: ICrypto }) {
  const [bookmark, setBookmark] = useState<boolean>(false);
  return (
    <Box
      className="flex-row items-center justify-between px-5 py-5 gap-2 border-b-2 border-gray-100"
      style={{ direction: "rtl" }}
    >
      <Box className="flex-row items-center gap-3">
        <Image
          style={{ width: 50, height: 50 }}
          source={item.buy.logo}
          // placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <Box className="flex-row">
          <Text className="font-semibold">
            {" / "}
            {item.buy.dname}
          </Text>
          <Text className="text-gray-400">{item.buy.symbol}</Text>
        </Box>
      </Box>
      <Box className="flex-row items-center gap-6">
        <Text>
          {"$"}
          {item.sell.price.toFixed(3).toString().replace(".", ",")}
        </Text>
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
    </Box>
  );
}
