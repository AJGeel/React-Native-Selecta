import React from "react";
import { StyleSheet, Text } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  label: string;
  selectedValue: string;
  onPress: () => void;
};

export default function SelectaInput({
  label,
  selectedValue,
  onPress,
}: Props): React.ReactElement {
  return (
    <TouchableOpacity style={styles.labelContainer} onPress={onPress}>
      <Text style={!!selectedValue ? styles.active : styles.inactive}>
        {selectedValue ? selectedValue : label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    padding: 6,
  },
  active: {
    color: "rgba(0,0,0,1)",
  },
  inactive: {
    color: "rgba(0,0,0,.6)",
  },
});
