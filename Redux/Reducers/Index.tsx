import { combineReducers } from "redux";
import setRecipe from "./CurrentRecipe";

export default combineReducers({
  selectedDog: setRecipe,
});
