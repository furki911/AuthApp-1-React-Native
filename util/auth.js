import axios from "axios";
const API_KEY = "AIzaSyCHTMh4wyRed_6EW8hAYfSWxYW5oa8nWcI";
const AUTH_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

const createUser = async (email, password) => {
  const response = await axios.post(`${AUTH_URL + API_KEY}`, {
    email,
    password,
    returnSecureToken: true,
  });

  console.log(response, "RES");
};
