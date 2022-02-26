import React, { useState } from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { Text, Input } from "react-native-elements";
import Styles from "./Styles";
import Button from "../../Components/Button";
import * as constants from "../../Helpers/Constants";

export default function Landing({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {};
  const register = () => {
    navigation.navigate(constants.REGISTER);
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.imageView}>
        <Image
          style={Styles.image}
          source={require("../../assets/cup_cake.jpg")}
        />
      </View>
      <View style={Styles.inputView}>
        <Text style={Styles.heading}>Welcome to The Cooker</Text>
        <Input
          placeholder="Email"
          errorStyle={{ color: "red" }}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          errorStyle={{ color: "red" }}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <View style={Styles.buttonsView}>
        <Button
          name={constants.LOGIN}
          color={constants.RED}
          ButtonFunction={login}
        />
        <Button
          name={constants.REGISTER}
          color={constants.CREAM}
          ButtonFunction={register}
        />
      </View>
    </View>
  );
}
