import MainLayout from "@/components/common/MainLayout";
import { Box } from "@/components/ui/box";
import React, { useState } from "react";
import { ScrollView } from "react-native";
// icons
import Svg_left from "@/assets/images/left.svg";

import { categoryData, ICategoryItem } from "@/assets/categoryData";
import _ from "lodash";
import { List } from "react-native-paper";

export default function CategoriesScreen() {
  const [expandedItems, setExexpandedItems] = useState<number[]>();

  const handlerExpandedItem = (index: number) => {
    let ex = _.toArray(expandedItems);
    if (ex && _.includes(expandedItems, index)) {
      ex = ex.filter((s) => s !== index);
      setExexpandedItems(ex);
    } else {
      ex?.push(index);
      setExexpandedItems(ex);
    }
  };

  return (
    <MainLayout>
      <ScrollView
        style={{ direction: "rtl" }}
        showsVerticalScrollIndicator={false}
      >
        <List.Section title="" style={{ direction: "rtl" }}>
          {_.map(categoryData, (item: ICategoryItem, index) =>
            item.subItems && item.subItems.length > 0 ? (
              <List.Accordion
                onPress={() => handlerExpandedItem(index)}
                key={index}
                title={item.title}
                description={item.subtitle}
                titleStyle={{
                  fontFamily: "esb",
                  fontSize: 13,
                  color: expandedItems?.includes(index) ? "#0F53D9" : "black",
                }}
                descriptionStyle={{
                  fontFamily: "esb",
                  fontSize: 10,
                  color: "gray",
                }}
                right={({ isExpanded }) =>
                  isExpanded ? (
                    <Svg_left width={20} height={20} rotation={-90} />
                  ) : (
                    <Svg_left width={20} height={20} />
                  )
                }
                left={(props) => (
                  <Box className="self-center ml-3">{item.icon}</Box>
                )}
              >
                {_.map(item.subItems, (sub: ICategoryItem, index) => (
                  <List.Item
                    key={index}
                    title={sub.title}
                    titleStyle={{
                      fontFamily: "esb",
                      fontSize: 13,
                      color: "#4b5563",
                    }}
                    left={() => (
                      <Box className="w-1.5 h-1.5 text-gray-600 rounded-full bg-blue-100 self-center mx-6" />
                    )}
                    onPress={() => {}}
                  />
                ))}
              </List.Accordion>
            ) : (
              <List.Item
                key={index}
                title={item.title}
                description={item.subtitle}
                titleStyle={{
                  fontFamily: "esb",
                  fontSize: 13,
                  color: "black",
                }}
                descriptionStyle={{
                  fontFamily: "esb",
                  fontSize: 10,
                  color: "gray",
                }}
                left={(props) => (
                  <Box className="self-center ml-3">{item.icon}</Box>
                )}
                onPress={() => {}}
              />
            )
          )}
        </List.Section>
        <Box className="h-20" />
      </ScrollView>
    </MainLayout>
  );
}
