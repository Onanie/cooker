import { combineReducers } from "redux";
import setRecipe from "./CurrentRecipe";
import Recipes from "./RecipesReducer";
import setRecipes from "./AddRecipes";

export default combineReducers({
  selectedDog: setRecipe,
  recipes: Recipes,
  addRecipes: setRecipes,
});
