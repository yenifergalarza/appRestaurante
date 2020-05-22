import React, { useRef, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as firebase from "firebase";
import { Button } from "react-native-elements";
import Toast from "react-native-easy-toast";
import Loading from "../../components/Loading";
export default function UserGuest() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const toastRef = useRef();
  return (
    <View style={StyleSheet.viewUserInfo}>
      <Text>InfoUser.. </Text>
      <Text>Acount options</Text>
      <Button
        title="cerrar sesión"
        titleStyle={styles.btnCloseSessionText}
        buttonStyle={styles.btnCloseSession}
        onPress={() => firebase.auth().signOut()}
      ></Button>
      <Toast ref={toastRef} position="center" opacity={0.9}></Toast>
      <Loading text={loadingText} isVisible={loading}></Loading>
    </View>
  );
}

const styles = Stylesheet.create({
  viewUserInfo: {
    backgroundColor: "#f2f2f2",
    minHeight: "100%",
  },
  btnCloseSession: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e3e3e3",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
    paddingBottom: 10,
    paddingTop: 10,
  },
  btnCloseSessionText: {
    color: "#00a680",
  },
});
