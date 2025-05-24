import AmazonDark from "@/assets/svgs/amazon-dark.svg";
import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { Pagination } from "react-native-reanimated-carousel";
import { Box } from "../ui/box";

const defaultDataWith6Colors: string[] = [
  //   "#B0604D",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

const { height, width } = Dimensions.get("screen");

function CaroscalSection() {
  const scrollOffsetValue = useSharedValue<number>(0);
  const progress = useSharedValue<number>(0);

  return (
    <View>
      <Carousel
        loop={true}
        width={width}
        height={height / 5 + 5}
        onProgressChange={progress}
        snapEnabled={true}
        pagingEnabled={true}
        autoPlay
        autoPlayInterval={3000}
        data={defaultDataWith6Colors}
        defaultScrollOffsetValue={scrollOffsetValue}
        style={{ width: width }}
        onScrollStart={() => {
          console.log("Scroll start");
        }}
        onScrollEnd={() => {
          console.log("Scroll end");
        }}
        onConfigurePanGesture={(g: { enabled: (arg0: boolean) => any }) => {
          "worklet";
          g.enabled(false);
        }}
        onSnapToItem={(index: number) => console.log("current index:", index)}
        renderItem={({ item }: { item: string }) => {
          return item.length > 20 ? (
            <Box className="h-full" style={{ backgroundColor: item }}>
              <Text>{item}</Text>
            </Box>
          ) : (
            <AmazonDark width={width} height={"100%"} scaleX={1.05} />
          );
        }}
      />
      <Box className="absolute bottom-2 px-2 py-1 rounded-full self-center bg-white items-center justify-center flex-row">
        <Pagination.Basic
          progress={progress}
          data={defaultDataWith6Colors}
          dotStyle={{
            width: 6,
            height: 6,
            backgroundColor: "lightgray",
            borderRadius: "100%",
          }}
          activeDotStyle={{ backgroundColor: "#0f53da" }}
          containerStyle={{ gap: 3 }}
          // onPress={onPressPagination}
        />
      </Box>
    </View>
  );
}

export default CaroscalSection;
