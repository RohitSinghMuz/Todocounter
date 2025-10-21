import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const App = () => {
  let arrData = [
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
    { id: 3, name: "Canada" },
  ];

  const [selectedData, setData] = useState([]);

  const handleSelect = (idx) => {
    console.log("idx----", idx);
    if (selectedData.includes(idx)) {
      const filterData = selectedData.filter((item) => item !== idx);
      setData(filterData);
    } else {
      setData([...selectedData, idx]);
    }
  };
  const handleSelectAll = () => {
    const AllData = arrData.map((_item, index) => index);
    setData(AllData);
  };

  const handleUnSelectAll = () => {
    setData([]);
  };

  return (
    <View style={styles.app}>
      <Text>App</Text>

      {arrData.map((item, index) => {
        return (
          <>
            <TouchableOpacity onPress={() => handleSelect(index)}>
              <Text
                style={{
                  padding: 10,
                  backgroundColor: selectedData.includes(index)
                    ? "red"
                    : "white",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          </>
        );
      })}

      <TouchableOpacity style={{ padding: 10 }} onPress={handleSelectAll}>
        <Text>Select All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 10 }} onPress={handleUnSelectAll}>
        <Text>unSelect All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
  },
  logo: {
    height: 80,
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  link: {
    color: "#1B95E0",
  },
  code: {
    fontFamily: "monospace, monospace",
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 2,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default App;

