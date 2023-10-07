import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import useAuth from "../../hooks/useAuth";

export default function UserData() {
  const { auth, logout } = useAuth();

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>
          Welcome {auth.firstName} {auth.lastName}
        </Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Name" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={`${auth.userName}`} />
        <ItemMenu title="email" text={`${auth.email}`} />
        <ItemMenu title="Total favorites" text={`0 Pokemos`} />
      </View>
      <Button title="Log Out" onPress={logout} style={styles.btnLogOut} />
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogOut: {
    paddingTop: 20,
  },
});
