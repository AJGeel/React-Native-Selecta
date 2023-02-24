import React from "react";
import { StyleSheet, StyleProp, ViewStyle, Text } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  value: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function ModalOption({
  value,
  onPress,
  style,
}: Props): React.ReactElement {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
});
