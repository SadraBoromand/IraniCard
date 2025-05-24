import "@/global.css";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import CustomThemeProvider from "@/components/common/CustomThemeProvider";
import { useColorScheme } from "@/hooks/useColorScheme";
import * as SplashScreen from "expo-splash-screen";
import { useMemo } from "react";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    er: require("../assets/fonts/Estedad-Regular.ttf"),
    em: require("../assets/fonts/Estedad-Medium.ttf"),
    eb: require("../assets/fonts/Estedad-Bold.ttf"),
    esb: require("../assets/fonts/Estedad-SemiBold.ttf"),
    dmr: require("../assets/fonts/DMSans-Regular.ttf"),
    dmm: require("../assets/fonts/DMSans-Medium.ttf"),
    dmb: require("../assets/fonts/DMSans-Bold.ttf"),
  });

  const onLayoutRootView = useMemo(() => {
    if (loaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      SplashScreen.hide();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <CustomThemeProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="TabBarRoute" />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="login" />
          <Stack.Screen name="search" />
          <Stack.Screen name="details" />
        </Stack>
        <StatusBar style="dark" backgroundColor="#fff" />
      </ThemeProvider>
    </CustomThemeProvider>
  );
}
