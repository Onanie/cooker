import React from "react";
import { Text, View, TextInput } from "react-native";
import Styles from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Search() {
  return (
    <View style={Styles.searchBar}>
      <Icon name="search" style={Styles.searchIcon} />
      <TextInput
        style={Styles.searchInput}
        placeholder="Search for recipes..."
      />
    </View>
  );
}
