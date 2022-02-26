import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Styles from "./Styles";

interface Props {
  ButtonFunction: () => void;
  name: string;
  color: string;
}
const Button = ({ ButtonFunction, name, color }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => ButtonFunction()}
      style={[Styles.button, { backgroundColor: color }]}
    >
      <Text style={Styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};
export default Button;
