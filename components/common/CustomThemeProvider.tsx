import { StatusBar } from "expo-status-bar";
import React, { ReactNode } from "react";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { GluestackUIProvider } from "../ui/gluestack-ui-provider";

const lightTheme = {
  colors: {
    primary: "rgb(14, 83, 218)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(219, 225, 255)",
    onPrimaryContainer: "rgb(0, 23, 76)",
    secondary: "rgb(14, 83, 218)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(219, 225, 255)",
    onSecondaryContainer: "rgb(0, 23, 76)",
    tertiary: "rgb(14, 83, 218)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(219, 225, 255)",
    onTertiaryContainer: "rgb(0, 23, 76)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(254, 251, 255)",
    onBackground: "rgb(27, 27, 31)",
    surface: "rgb(254, 251, 255)",
    onSurface: "rgb(27, 27, 31)",
    surfaceVariant: "rgb(226, 225, 236)",
    onSurfaceVariant: "rgb(69, 70, 79)",
    outline: "rgb(117, 118, 128)",
    outlineVariant: "rgb(198, 198, 208)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(48, 48, 52)",
    inverseOnSurface: "rgb(242, 240, 244)",
    inversePrimary: "rgb(180, 196, 255)",
    elevation: {
      level0: "transparent",
      level1: "rgb(242, 243, 253)",
      level2: "rgb(235, 238, 252)",
      level3: "rgb(228, 233, 251)",
      level4: "rgb(225, 231, 251)",
      level5: "rgb(220, 228, 250)",
    },
    surfaceDisabled: "rgba(27, 27, 31, 0.12)",
    onSurfaceDisabled: "rgba(27, 27, 31, 0.38)",
    backdrop: "rgba(46, 48, 56, 0.4)",
  },
};

const darkTheme = {
  colors: {
    primary: "rgb(180, 196, 255)",
    onPrimary: "rgb(0, 41, 122)",
    primaryContainer: "rgb(0, 61, 170)",
    onPrimaryContainer: "rgb(219, 225, 255)",
    secondary: "rgb(180, 196, 255)",
    onSecondary: "rgb(0, 41, 122)",
    secondaryContainer: "rgb(0, 61, 170)",
    onSecondaryContainer: "rgb(219, 225, 255)",
    tertiary: "rgb(180, 196, 255)",
    onTertiary: "rgb(0, 41, 122)",
    tertiaryContainer: "rgb(0, 61, 170)",
    onTertiaryContainer: "rgb(219, 225, 255)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(27, 27, 31)",
    onBackground: "rgb(228, 226, 230)",
    surface: "rgb(27, 27, 31)",
    onSurface: "rgb(228, 226, 230)",
    surfaceVariant: "rgb(69, 70, 79)",
    onSurfaceVariant: "rgb(198, 198, 208)",
    outline: "rgb(143, 144, 154)",
    outlineVariant: "rgb(69, 70, 79)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(228, 226, 230)",
    inverseOnSurface: "rgb(48, 48, 52)",
    inversePrimary: "rgb(14, 83, 218)",
    elevation: {
      level0: "transparent",
      level1: "rgb(35, 35, 42)",
      level2: "rgb(39, 41, 49)",
      level3: "rgb(44, 46, 56)",
      level4: "rgb(45, 47, 58)",
      level5: "rgb(48, 51, 62)",
    },
    surfaceDisabled: "rgba(228, 226, 230, 0.12)",
    onSurfaceDisabled: "rgba(228, 226, 230, 0.38)",
    backdrop: "rgba(46, 48, 56, 0.4)",
  },
};

export default function CustomThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  let colorScheme = useColorScheme();

  return (
    <GluestackUIProvider mode={"light"}>
      <PaperProvider theme={lightTheme}>
        <SafeAreaView className="flex-1">{children}</SafeAreaView>
        <StatusBar style={"light"} backgroundColor="gray" />
      </PaperProvider>
    </GluestackUIProvider>
  );
}
