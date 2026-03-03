import { View, Switch, Text } from "react-native";
import * as Haptics from "expo-haptics";

export default function Settings() {
  return (
    <View>
      <Text>Sound</Text>
      <Switch />
      <Text>Haptics</Text>
      <Switch onValueChange={() => Haptics.selectionAsync()} />
      <Text>Game Center Login</Text>
    </View>
  );
}
