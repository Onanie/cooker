import * as ActionTypes from "../ActionTypes";

export default (recipe = null, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_RECIPES:
      return action.payload;
  }
  return recipe;
};
