import React from "react";
import { Text, View } from "react-native";
import Styles from "./Styles";

interface Props {
  ingridients: string;
  method: string;
}
export default function Method({ method, ingridients }: Props) {
  let ingrids = ingridients.split(",");

  return (
    <View style={Styles.container}>
      <View style={Styles.methodContainer}>
        <View style={Styles.ingridientsView}>
          <Text style={{ margin: 5, fontWeight: "bold", color: "#666A6D" }}>
            Ingredients
          </Text>
          {ingrids.map((item) => {
            return (
              <Text style={{ marginLeft: 10, color: "#666A6D" }}>{item} </Text>
            );
          })}
        </View>
        <View style={Styles.methodView}>
          <Text style={{ flexWrap: "wrap", margin: 10, color: "#666A6D" }}>
            {method}
          </Text>
        </View>
      </View>
    </View>
  );
}
