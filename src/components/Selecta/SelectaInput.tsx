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
  const hasValue = !!selectedValue;

  return (
    <TouchableOpacity
      style={hasValue ? styles.containerActive : styles.containerInactive}
      onPress={onPress}
    >
      <Text style={hasValue ? styles.active : styles.inactive}>
        {hasValue ? selectedValue : label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerActive: {
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  containerInactive: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderBottomWidth: 3,
    borderColor: "rgba(0,0,0,.1)",
  },
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
