import React, { useEffect, useState } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import RecipeCard from "../../Components/RecipeCard";
import { setRecipes } from "../../Redux/Actions/Index";
import Styles from "./Styles";
import Header from "../../Components/Header";

function Home({ recipes }: any) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {});

  const getMoreData = () => {};

  const renderFooter = () => {
    return (
      <View>
        {loading ? (
          <ActivityIndicator color="black" style={{ margin: 15 }} />
        ) : null}
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      <Header />
      <FlatList
        data={recipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <RecipeCard item={item} />;
        }}
        ListFooterComponent={renderFooter}
        onEndReached={getMoreData}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
const mapStateToProps = (state: any) => {
  console.log("the recipes: " + JSON.stringify(state.recipes));
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, setRecipes)(Home);
