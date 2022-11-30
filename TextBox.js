import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const TextBox = ({placeHolder}) => {
  const [text, onChangeText] = React.useState(null);
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeHolder}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextBox;