import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurants from "../screens/Restaurants";

const Stack = createStackNavigator();
export default function RestaurantsStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        option={{ title: "Restaurantes" }}
        name="restaurants"
        component={Restaurants}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
