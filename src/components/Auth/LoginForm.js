import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import React from "react";

export default function LoginForm() {
  handleOnPress = () => {
    console.log("Sign in in process");
  };
  return (
    <View>
      <Text style={styles.title}>Sign in</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <Button title="Sign In" onPress={handleOnPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
