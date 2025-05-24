import { iconSvg } from "@/components/icons/iconSvg";
import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import CategoriesScreen from "./tab_screens/categories";
import CryptoScreen from "./tab_screens/crypto";
import dashboardScreen from "./tab_screens/dashboard";
import orderList from "./tab_screens/orderList";
import supportScreen from "./tab_screens/support";

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const TabBarRoute = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "داشبورد",
      focusedIcon: "home_focused",
      unfocusedIcon: "home_unfocused",
    },
    {
      key: "categories",
      title: "دسته‌بندی",
      focusedIcon: "category_focused",
      unfocusedIcon: "category_unfocused",
    },
    {
      key: "crypto",
      title: "رمزارز",
      focusedIcon: "crypto_focused",
      unfocusedIcon: "crypto_unfocused",
    },
    {
      key: "orderList",
      title: "سبدخرید",
      focusedIcon: "cart_focused",
      unfocusedIcon: "cart_unfocused",
    },

    {
      key: "support",
      title: "پشتیبانی",
      focusedIcon: "support_focused",
      unfocusedIcon: "support_unfocused",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: dashboardScreen,
    categories: CategoriesScreen,
    crypto: CryptoScreen,
    orderList: orderList,
    support: supportScreen,
  });

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: "#f2f0f5", direction: "rtl", maxHeight: 80 }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderLabel={({ route, focused, color }) => (
        <Text className="self-center text-xs" style={{ fontFamily: "esb" }}>
          {route.title}
        </Text>
      )}
      renderIcon={({ route, focused, color }) => {
        let icon: any;
        if (focused) {
          icon = iconSvg.find((s) => s.title === route.focusedIcon)?.icon;
        } else {
          icon = iconSvg.find((s) => s.title === route.unfocusedIcon)?.icon;
        }
        return icon;
      }}
    />
  );
};

export default TabBarRoute;
