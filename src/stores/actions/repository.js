import axios from "axios";

export const getRepository = () => {
  return {
    type: "GET_REPOSITORY",
    payload: axios.get("https://api.github.com/users/AhmadZaky19/repos")
  };
};