import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { connect } from "react-redux";
import Header from "../../Components/Header";
import Method from "../../Components/Method";
import Styles from "./Styles";
import Button from "../../Components/Button";

function Details({ recipe }) {
  const [show, setShow] = useState(false);
  const [liked, setLike] = useState(false);
  const [comment, setComment] = useState("");
  const like = () => {
    setLike(true);
  };
  const comments = () => {
    setShow(true);
  };
  const post = () => {
    setShow(false);
  };

  const share = async () => {};
  const download = () => {};

  const TextArea = () => {
    return (
      <View style={{ width: "80%" }}>
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder="Write a comment..."
          onChangeText={(text) => setComment(text)}
          value={comment}
          style={{
            margin: 3,
            padding: 5,
          }}
        />
      </View>
    );
  };
  return (
    <View style={Styles.container}>
      <Header headerText={recipe.title} />
      <View style={Styles.imageView}>
        <Image source={recipe.imageUri} style={Styles.image} />
      </View>
      <ScrollView style={{ height: 250 }}>
        <View style={Styles.methodView}>
          <Method ingridients={recipe.ingredients} method={recipe.method} />
        </View>
        <View style={Styles.userView}>
          <Image source={recipe.userImage} style={Styles.cardUserImage} />
          <View style={Styles.userDetails}>
            <Text>Recipe by:</Text>
            <Text>{recipe.name}</Text>
          </View>
          <View style={Styles.userContact}>
            <Ionicons
              onPress={like}
              name="heart-outline"
              size={35}
              color={liked ? "red" : "black"}
            />
            <Ionicons onPress={comments} name="chatbubble-outline" size={35} />
          </View>
        </View>
        <View style={[Styles.commentView, { display: show ? "flex" : "none" }]}>
          <TextArea />
          <TouchableOpacity
            style={{
              width: "20%",
              height: "100%",
              alignItems: "center",
              justifyContent: "space-around",
              backgroundColor: "#DCDCDC",
            }}
          >
            <Ionicons
              onPress={post}
              name="paper-plane-outline"
              size={25}
              color="green"
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.buttonsView}>
          <Button ButtonFunction={download} name="Download" color="#DCDCDC" />
          <Button ButtonFunction={share} name="Share" color="#DCDCDC" />
        </View>
      </ScrollView>
    </View>
  );
}
const mapStateToProps = (state: any) => {
  console.log("the recipe: " + JSON.stringify(state.selectedRecipe));
  return {
    recipe: state.selectedRecipe,
  };
};

export default connect(mapStateToProps)(Details);
