import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// import Icon from "../Icon/Icon";
// import { IconName } from "../Icon/IconName";

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
      <Text style={[styles.absoluteIcon, styles.searchIcon]}>Search Icon</Text>
      {/* <Icon
        name={IconName.Search}
        size={18}
        style={[styles.absoluteIcon, styles.searchIcon]}
      /> */}
      <TextInput
        onChangeText={(value) => setQuery(value)}
        value={query}
        placeholder="Start by typing something..."
        style={styles.textInput}
        autoCorrect={false}
        autoFocus={true}
      />
      {query && (
        <TouchableOpacity
          style={[styles.absoluteIcon, styles.closeButton]}
          onPress={onClear}
        >
          <Text>CancelIcon</Text>
          {/* <Icon name={IconName.Cancel} size={18} /> */}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,.2)",
    borderRadius: 4,
    justifyContent: "center",
  },
  absoluteIcon: {
    position: "absolute",
    padding: 12,
    marginVertical: "auto",
  },
  searchIcon: {
    opacity: 0.3,
  },
  closeButton: {
    right: 0,
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
});
