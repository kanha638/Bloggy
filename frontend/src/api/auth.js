import axios from "axios";

import { start, success, errors, logoutSucess } from "../features/userSlice";

const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(start());
  try {
    console.log(user);
    const result = await API.post("api/auth/register", user, {
      withCredentials: true,
    });
    dispatch(success(result.data.data));
    navigate("/");
  } catch (error) {
    dispatch(errors());
    console.log(error);
  }
};

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(start());
  try {
    const result = await API.post("/api/auth/login", user, {
      withCredentials: true,
    });
    dispatch(success(result.data.data));
    navigate("/");
  } catch (error) {
    console.log(error);
    dispatch(errors);
  }
};

export const logout = async (dispatch) => {
  dispatch(start());
  try {
    const result = await API.get("/api/auth/logout", {
      withCredentials: true,
    });
    dispatch(logoutSucess());
  } catch (error) {
    console.log(error);
    dispatch(errors());
  }
};
