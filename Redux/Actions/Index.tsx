import * as actionTypes from "../ActionTypes";

export const selectRecipe = (recipe: any) => {
  return {
    type: actionTypes.SET_RECIPE,
    payload: recipe,
  };
};
export const setRecipes = (recipes: any) => {
  return {
    type: actionTypes.SET_RECIPE,
    payload: recipes,
  };
};
export const setSearch = (text: any) => {
  return {
    type: actionTypes.SET_SEARCH,
    payload: text,
  };
};
