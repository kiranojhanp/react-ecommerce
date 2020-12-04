import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
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
    const { data } = await axios.post(
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

export const register = (name, email, password) => async (dispatch) => {
  try {
    // request action
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    // set content type
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // authorize user
    const { data } = await axios.post(
      "/api/users/register",
      {
        name,
        email,
        password,
      },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    // set user details to localstorage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    // catch error
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    // request action
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    // set content type
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // authorize user
    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });

    // set user details to localstorage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    // catch error
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    // request action
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    // set content type
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // authorize user
    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });

    // set user details to localstorage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    // catch error
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};
