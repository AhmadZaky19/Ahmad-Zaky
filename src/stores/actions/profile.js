import axios from "axios";

export const getProfile = () => {
  return {
    type: "GET_PROFILE",
    payload: axios.get("https://api.github.com/users/AhmadZaky19")
  };
};