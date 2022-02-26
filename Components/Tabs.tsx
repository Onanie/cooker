import React from "react";
import Home from "../Pages/Home/Home";
import Messages from "../Pages/Details/Details";
import Favourites from "../Pages/Home/Home";
import Profile from "../Pages/Details/Details";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: "",
        },
        activeTintColor: "white",
        inactiveTintColor: "gray",
        showLabel: false,
        style: {
          height: 100,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={28} color="green" />
          ),
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={28} color="green" />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail-open-outline" size={28} color="green" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={28} color="green" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
