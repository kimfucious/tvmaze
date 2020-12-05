import { combineReducers } from "redux";
import { tvMaze } from "./tvMazeReducer";

export const appReducer = combineReducers({
  tvMaze
});

export const rootReducer = (state, action) => {
  if (action.type === "SIGN_OUT_SUCCESS") {
    console.log("🧹 Clearing Store on Sign Out");
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
