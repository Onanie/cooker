import React from "react";
import { View, Text } from "react-native";
import Styles from "./Styles";
import Search from "./Search";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  navigation?: any;
  headerText?: string;
}
export default function Header({ navigation, headerText }: Props) {
  return (
    <View style={Styles.header}>
      <View style={Styles.headerCenter}>
        <Ionicons
          name="chevron-back-outline"
          style={[Styles.backIcon, { display: navigation ? "flex" : "none" }]}
          onPress={() => navigation.goBack()}
        />
        <Text style={Styles.headerTitle}>
          {headerText ? headerText : "The Cooker"}
        </Text>
        <Ionicons name="add-outline" style={Styles.addIcon} />
      </View>

      <Search />
    </View>
  );
}
