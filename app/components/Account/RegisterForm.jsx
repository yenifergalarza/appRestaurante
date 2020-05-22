import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/validations";
import Loading from "../Loading";
import { size, isEmpty } from "lodash";
import * as firebase from "firebase";

import {
  useNavigation,
  NavigationNativeContainer,
} from "@react-navigation/native";

export default function RegisterForm(props) {
  const { toastRef } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const onSubmit = () => {
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    ) {
      toastRef.current.show("todos los datos son obligatoriios ");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("El email no es correcto ");
    } else if (formData.password !== formData.repeatPassword) {
      toastRef.current.show("Las contraseñas tienes que ser iguales ");
    } else if (size(formData.password) < 6) {
      toastRef.current.show(
        "Las contraseñas tienes que tener al menos 6 caracteres "
      );
    } else {
      setLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          setLoading(false);
          NavigationNativeContainer.navigate("account");
        })
        .catch(() => {
          setLoading(false);
          toastRef.current.show("El email ya esta en uso,use otro ");
        });
    }
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };
  return (
    <View styles={styles.formContainer}>
      <Input
        placeholder="Correo Electronico"
        style={styles.inputForm}
        onChange={(e) => {
          onChange(e, "email");
        }}
        rightIcon={
          <Icon
            type="material-community"
            iconStyle={styles.iconRight}
            name="at"
          />
        }
      />
      <Input
        placeholder="contraseña"
        password={true}
        secureTextEntry={showPassword ? false : true}
        style={styles.inputForm}
        onChange={(e) => {
          onChange(e, "password");
        }}
        rightIcon={
          <Icon
            type="material-community"
            iconStyle={styles.iconRight}
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          />
        }
      ></Input>
      <Input
        placeholder="Repetir contraseña"
        password={true}
        secureTextEntry={showRepeatPassword ? false : true}
        style={styles.inputForm}
        onChange={(e) => {
          onChange(e, "repeatPassword");
        }}
        rightIcon={
          <Icon
            type="material-community"
            iconStyle={styles.iconRight}
            name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
            onPress={() => {
              setShowRepeatPassword(!showRepeatPassword);
            }}
          />
        }
      ></Input>

      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={onSubmit}
      ></Button>
      <Loading isVisible={loading} text="creando cuenta"></Loading>
    </View>
  );
}

function defaultFormValue() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    height: 20,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
