import React from "react";
import { StyleSheet, View, ScrollView, text, Image } from "react-native";
import { Button } from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

export default function UserGuest() {
  const navigation = useNavigation();
  
  
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../../assets/img/original.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}> consulta tu perfil</Text>
      <Text style={styles.description}>
        como describirias tu mejor restaurante,crea tu perfil y descubre,vota
        ycommenta
      </Text>

      <View style={styles.viewBtn}>
        <Button
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        title="ve tu perfil"
        onPress={()=>{ navigation.navigate("login")
        }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },description:{
    textAlign:"center",
    marginBottom:20,
  },
  viewBtn:{
    flex:1,
    alignItems:"center"
  },
  btnStyle:{backgroundColor:"#00a680"},
  btnContainer:{width="70%"}
});
