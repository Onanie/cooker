import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { connect, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectRecipe } from "../Redux/Actions/Index";
import Styles from "./Styles";

function RecipeCard({ item }: any) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={Styles.productContainer}>
      <TouchableOpacity
        style={Styles.productCard}
        onPress={() => {
          dispatch(selectRecipe(item));
          navigation.navigate("Details");
        }}
      >
        <View style={Styles.productImageContainer}>
          <Image style={Styles.productImage} source={item.imageUri} />
        </View>
        <View style={Styles.textContainer}>
          <Text style={Styles.productTitle}>{item.title}</Text>
        </View>

        <View style={Styles.productFooterContainer}>
          <Image style={Styles.cardUserImage} source={item.userImage} />

          <Text style={{ alignSelf: "center" }}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const mapStateToProps = (state: any) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, selectRecipe)(RecipeCard);
