import { Link, Stack } from "expo-router";
import { Text } from "react-native-paper";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Text variant="labelLarge">This screen does not exist.</Text>
      <Link href={"/"}>Go to home screen!</Link>
    </>
  );
}
