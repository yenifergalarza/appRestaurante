import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screens/Search";

const Stack = createStackNavigator();
export default function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        option={{ title: "buscador" }}
        name="search"
        component={Search}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
