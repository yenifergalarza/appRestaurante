import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopRestaurants from "../screens/TopRestaurants";

const Stack = createStackNavigator();
export default function RestaurantsStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        option={{ title: "Los Mejores Restaurantes" }}
        name="top-restaurants"
        component={TopRestaurants}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
