import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Selecta from "./src/components/Selecta";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const data = ["Foo", "Bar", "Baz"];

  return (
    <View style={styles.container}>
      <Selecta
        label="Choose an option"
        data={data}
        searchOption={true}
        selectedValue={value}
        setSelectedValue={setValue}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
