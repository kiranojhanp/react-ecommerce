import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    // request action
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    // set content type
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // authorize user
    const { data } = await axios.get(
      "/api/users/login",
      {
        email,
        password,
      },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    // set user details to localstorage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    // catch error
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
