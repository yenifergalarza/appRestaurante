import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login";
import Register from "../screens/Account/Register";

const Stack = createStackNavigator();
export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        option={{ title: "Mi Cuenta" }}
        name="account"
        component={Account}
      />

      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "iniciar Sesión" }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        option={{ title: "Registro" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
