import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  data: string[];
  onChange: (data: string[]) => void;
};

export default function ModalSearch({
  data,
  onChange,
}: Props): React.ReactElement {
  const [query, setQuery] = useState("");

  const onClear = () => {
    setQuery("");
    onChange(data);
  };

  useEffect(() => {
    const filtered = data.filter((el) =>
      el.toLowerCase().includes(query.toLowerCase())
    );
    onChange(filtered);
  }, [query, data, onChange]);

  return (
    <View style={styles.container}>
      <Ionicons
        style={[styles.absoluteIcon, styles.searchIcon]}
        name="search"
        size={18}
      />
      <TextInput
        onChangeText={(value) => setQuery(value)}
        value={query}
        placeholder="Start by typing something..."
        style={styles.textInput}
        autoCorrect={false}
        autoFocus={true}
      />
      {query && (
        <Ionicons
          style={[styles.absoluteIcon, styles.clearButton]}
          onPress={onClear}
          name="close"
          size={18}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,.08)",
    borderRadius: 4,
    justifyContent: "center",
  },
  absoluteIcon: {
    position: "absolute",
    padding: 8,
    marginVertical: "auto",
  },
  searchIcon: {
    opacity: 0.4,
  },
  clearButton: {
    right: 0,
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
});
