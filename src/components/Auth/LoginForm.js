import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";

export default function LoginForm() {
  const [errorMsg, setErrorMsg] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValues) => {
      setErrorMsg("");
      const { userName, password } = formValues;

      if (userName !== user.userName || password !== user.password) {
        setErrorMsg("User or Password are not correct");
      } else {
        console.log("Login success");
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Sign in</Text>
      <TextInput
        placeholder="User Name"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.userName}
        onChangeText={(userNameTapped) => {
          formik.setFieldValue("userName", userNameTapped);
        }}
      />
      <Text style={styles.error}>{formik.errors.userName}</Text>
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(passwordTapped) => {
          formik.setFieldValue("password", passwordTapped);
        }}
      />
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{errorMsg}</Text>
      <Button title="Sign In" onPress={formik.handleSubmit} />
    </View>
  );
}

function initialValues() {
  return {
    userName: "",
    password: "",
  };
}

function validationSchema() {
  return {
    userName: Yup.string().required("User name is required"),
    password: Yup.string().required("Password is required"),
  };
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
  error: {
    textAlign: "center",
    color: "red",
    marginBottom: 20,
  },
});
