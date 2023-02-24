import React, { useState, Dispatch, SetStateAction, ReactElement } from "react";
import { StyleSheet, Pressable, Modal, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import SelectaInput from "./SelectaInput";
import SelectaButton from "./SelectaOption";
import SelectaSearch from "./SelectaSearch";

type Props = {
  label: string;
  data: string[];
  searchOption?: boolean;
  selectedValue: string;
  setSelectedValue: Dispatch<SetStateAction<string>>;
};

export default function ModalSelector({
  label,
  data,
  searchOption,
  selectedValue,
  setSelectedValue,
}: Props): ReactElement {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filteredData, setFilteredData] = useState(data);

  const onShowModal = () => {
    setIsModalVisible(true);
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal animationType="fade" transparent={true} visible={isModalVisible}>
        <Pressable onPress={onCloseModal} style={styles.backdrop} />
        <View style={styles.container}>
          <Text>{label}</Text>
          <FlatList
            data={filteredData}
            keyboardShouldPersistTaps="always"
            renderItem={({ item }) => (
              <SelectaButton
                value={item}
                onPress={() => {
                  setSelectedValue(item);
                  onCloseModal();
                }}
              />
            )}
            ListEmptyComponent={() => <Text style={styles.empty}>Empty</Text>}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
          {searchOption && (
            <SelectaSearch data={data} onChange={setFilteredData} />
          )}
          <SelectaButton
            value="Cancel"
            style={styles.cancelButton}
            onPress={() => {
              setSelectedValue("");
              onCloseModal();
            }}
          />
        </View>
      </Modal>
      <SelectaInput
        label={label}
        selectedValue={selectedValue}
        onPress={onShowModal}
      />
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: { height: "100%", backgroundColor: "#000000", opacity: 0.3 },
  container: {
    padding: 27,
    paddingBottom: 27,
    backgroundColor: "#FFFFFF",
    maxHeight: "85%",
    marginTop: "auto",
  },
  header: {
    color: "rgba(0,0,0,.7)",
    marginBottom: 16,
  },
  separator: {
    backgroundColor: "rgba(0,0,0,.2)",
    height: 1,
  },
  empty: {
    paddingVertical: 12,
  },
  cancelButton: {
    opacity: 0.5,
    marginTop: 8,
  },
});
