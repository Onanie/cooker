import React from "react";
import Landing from "../Pages/Landing/Landing";
import Details from "../Pages/Details/Details";
import Tabs from "./Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserDetails from "../Pages/Register/UserDetails";

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Deails" component={Details} />
        <Stack.Screen name="Register" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
