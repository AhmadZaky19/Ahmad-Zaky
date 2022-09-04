import { combineReducers } from "redux";
import profile from "./profile";
import repository from "./repository";

export default combineReducers({
  profile,
  repository
});